import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home({ setCurrentPage }: any) {
  const [votes] = useCollection(collection(db, 'votes'))
  let rawVotes: any = []
  let processedVotes: any = []

  votes?.docs.map((item) => console.log(item.data().from, item.data().to))
  votes?.docs.map((item) => rawVotes.push(item.data()))
  console.log(rawVotes)

  rawVotes.map((vote: any) => {
    let totalVotes = 0
    rawVotes.map((vote2: any) => {
      if (vote.from === vote2.to) totalVotes += 1
    })
    processedVotes.push({ id: vote.from, totalVotes })
  })

  processedVotes.sort((a: any, b: any) =>
    a.totalVotes < b.totalVotes ? 1 : -1
  )

  console.log(processedVotes)

  return (
    <div className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'>
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>

      <div
        className='cursor-pointer my-10'
        onClick={() => setCurrentPage('Play')}
      >
        Go back
      </div>
    </div>
  )
}
