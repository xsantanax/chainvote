import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home({ setCurrentPage }) {
  const [votes] = useCollection(collection(db, 'votes'))

  const [myUsers, setMyUsers] = useState([])

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
    <div className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'>
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>
      <div className='col gap-4 my-16'>
        {myUsers.map((user) => (
          <div key={user.id} className='flex w-[250px]'>
            <div>{user.id}</div>
            <div className='flex-1' />
            <div>Total Votes: {user.allVoters.length}</div>
          </div>
        ))}
      </div>
      <div className='cursor-pointer' onClick={() => setCurrentPage('Play')}>
        Go back
      </div>
    </div>
  )
}
