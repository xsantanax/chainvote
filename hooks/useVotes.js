import { useContext, createContext, useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

const VotesContext = createContext()

const VotesProvider = ({ children }) => {
  const [votes] = useCollection(collection(db, 'votes'))
  const [myUsers, setMyUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  let users = []

  const addVote = async ({ from, to }) => {
    let voterIndex, votedIndex

    //check if voter exists
    if (users.filter((e) => e.id === from).length == 0) {
      //voter still doesn't exist
      users.push({
        id: from,
        vote: to,
        directVoters: [],
        allVoters: []
      })
      voterIndex = users.length - 1
    } else {
      //voter already exists
      voterIndex = users.findIndex((obj) => obj.id == from)
      //check if my vote is in my voters
      if (users[voterIndex].allVoters.includes(to)) {
        console.log('circular voting detected, vote cancelled.')
      } else {
        //update w/ vote
        users[voterIndex].vote = to
      }
    }

    //then check if voted exists
    if (users.filter((e) => e.id === to).length == 0) {
      //voted doesnt exist, just add it w/ 1 directVoter and me + my allVoters
      users.push({
        id: to,
        vote: null,
        directVoters: [from],
        allVoters: users[voterIndex]
          ? [from, ...users[voterIndex].allVoters]
          : [from] //also need my allVoters
      })
    } else {
      //voted already exists, find its index
      votedIndex = users.findIndex((obj) => obj.id == to)
      //update w/ voters
      await users[votedIndex].directVoters.push(from)
      await users[votedIndex].allVoters.push(from)
      //add allVoters to vote chain
      while (!!users[votedIndex].vote) {
        votedIndex = users.findIndex((obj) => obj.id == users[votedIndex].vote)
        await users[votedIndex].allVoters.push(from)
        console.log(
          users[votedIndex].allVoters.concat(users[voterIndex].allVoters)
        )
        users[votedIndex].allVoters = [
          ...new Set([
            ...users[votedIndex].allVoters,
            ...users[voterIndex].allVoters
          ])
        ]
      }

      return setMyUsers(users)
    }
  }

  useEffect(() => {
    if (votes) {
      let rawVotes = []
      votes.docs.map((item) => rawVotes.push(item.data()))
      rawVotes.map((vote) => addVote(vote))
      console.log(users)
    }
  }, [votes])

  return (
    <VotesContext.Provider
      value={{
        myUsers,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </VotesContext.Provider>
  )
}

const useVotes = () => useContext(VotesContext)

export { VotesProvider, useVotes }
