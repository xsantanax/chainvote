import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home({ setCurrentPage }: any) {
  const [votes] = useCollection(collection(db, 'votes'))
  let rawVotes: any = []
  let users: any = []
  let processedVotes: any = []

  votes?.docs.map((item) => console.log(item.data().from, item.data().to))
  votes?.docs.map((item) => rawVotes.push(item.data()))
  // console.log(rawVotes)

  //0 - check for circular voting

  //1st - create one/two user objects for each vote
  rawVotes.map((vote: any) => {
    users.push({
      id: vote.from,
      vote: vote.to,
      directVoters: [],
      allVoters: []
    })
  })
  rawVotes.map((vote: any) => {
    if (users.filter((e: any) => e.id === vote.to).length == 0) {
      users.push({
        id: vote.to,
        vote: null,
        directVoters: [],
        allVoters: []
      })
    }
  })

  //2nd - map through rawVotes looking at vote.to
  //find him by id on users array and add vote.from to his directVoters
  let votedObjIndex: any

  rawVotes.map((vote: any) => {
    console.log(vote.to)
    votedObjIndex = users.findIndex((obj: any) => obj.id == vote.to)
    // console.log('users[votedObjIndex]', users[votedObjIndex])
    users[votedObjIndex].directVoters.push(vote.from)
    users[votedObjIndex].allVoters.push(vote.from)
    // console.log('users[votedObjIndex] after', users[votedObjIndex])
    console.log('users[votedObjIndex].vote', users[votedObjIndex].vote)
    console.log('!!users[votedObjIndex].vote', !!users[votedObjIndex].vote)

    //circular shit happening
    //add security checks now
    while (!!users[votedObjIndex].vote) {
      console.log('votedObjIndex', votedObjIndex)
      console.log('users[votedObjIndex].vote', users[votedObjIndex].vote)

      votedObjIndex = users.findIndex(
        (obj: any) => obj.id == users[votedObjIndex].vote
      )
      users[votedObjIndex].allVoters.push(vote.from)
    }
  })

  console.log(users)

  //3rd - map through users looking at vote
  //go to his vote
  //add user id to allVoters
  //go to his vote (upper vote, if exists)

  // rawVotes.map((vote: any) => {
  //   // let totalVotes = 0
  //   let directVoters = []
  //   let allVoters = []

  //   rawVotes.map((vote2: any) => {
  //     if (vote.from === vote2.to) {
  //       // totalVotes += 1
  //     }
  //   })
  //   // processedVotes.push({ id: vote.from, totalVotes })
  // })

  // processedVotes.sort((a: any, b: any) =>
  //   a.totalVotes < b.totalVotes ? 1 : -1
  // )

  // console.log(processedVotes)

  return (
    <div className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'>
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>
      <div className='col gap-4 my-16'>
        {processedVotes.map((vote: any) => (
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
