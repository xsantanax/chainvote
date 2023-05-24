import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home({ setCurrentPage }) {
  const [votes] = useCollection(collection(db, 'votes'))
  let rawVotes = []
  let users = []
  let processedVotes = []
  let voterIndex
  let votedIndex

  const [counter, setCounter] = useState(0)

  const addVote = async ({ from, to }) => {
    console.log('adding vote')
    console.log(from, to)
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
      //voted doesnt exist, just add it w/ 1 directVoter and 1 allVoter
      users.push({
        id: to,
        vote: null,
        directVoters: [from],
        allVoters: [from]
      })
    } else {
      console.log('voted exists')
      //voted already exists, find its index
      votedIndex = users.findIndex((obj) => obj.id == to)
      //then update w/ voters
      await users[votedIndex].directVoters.push(from)
      await users[votedIndex].allVoters.push(from)
      //then add allVoters to vote chain
      // console.log('users[votedIndex].vote', users[votedIndex].vote)
      // console.log('!!users[votedIndex].vote', !!users[votedIndex].vote)

      while (!!users[votedIndex].vote) {
        console.log('voted exists')
        console.log('voter', users[votedIndex].id)
        console.log('voted', users[votedIndex].vote)
        votedIndex = users.findIndex((obj) => obj.id == users[votedIndex].vote)
        await users[votedIndex].allVoters.push(from)
        console.log('!!users[votedIndex].vote', !!users[votedIndex].vote)
      }
    }
    console.log(users)
    setCounter(counter + 1)
  }

  // rawVotes.map((vote, index) => {
  //   setTimeout(() => {
  //     // do stuff function with item
  //     console.log(index, vote)
  //     addVote(vote)
  //   }, 3000 * index)
  // })

  useEffect(() => {
    votes?.docs.map((item) => console.log(item.data().from, item.data().to))
    votes?.docs.map((item) => rawVotes.push(item.data()))
    votes && console.log(rawVotes)
  }, [votes])

  useEffect(() => {
    rawVotes[counter] && addVote(rawVotes[counter])
    rawVotes && console.log(rawVotes)
  }, [votes, counter])

  return (
    <div className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'>
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>
      <div className='col gap-4 my-16'>
        {processedVotes.map((vote) => (
          <div className='flex w-[250px]'>
            <div>{vote.id}</div>
            <div className='flex-1' />
            <div>Total Votes: {vote.totalVotes}</div>
          </div>
        ))}
      </div>
      <div className='cursor-pointer' onClick={() => setCurrentPage('Play')}>
        Go back
      </div>
    </div>
  )
}
