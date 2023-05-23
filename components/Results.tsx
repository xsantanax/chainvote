import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home({ setCurrentPage }: any) {
  const [votes] = useCollection(collection(db, 'votes'))
  votes?.docs.map((item) => console.log(item.data().from, item.data().to))

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
