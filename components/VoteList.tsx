import { db } from '../firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function VoteList() {
  const [votes] = useCollection(collection(db, 'votes'))

  return (
    <>
      <div className='mt-10 mb-4'>Votes</div>
      <div className='flex gap-8'>
        <div className='col'>
          <div>from:</div>
          {votes?.docs.map((item) => (
            <div>
              <u>{item.data().from}</u>
            </div>
          ))}
        </div>
        <div className='col'>
          <div>to:</div>
          {votes?.docs.map((item) => (
            <div>
              <u>{item.data().to}</u>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
