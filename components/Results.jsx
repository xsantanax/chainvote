import { useVotes } from '../hooks/useVotes'

export default function Home({ setCurrentPage, openModal }) {
  const { myUsers, setCurrentUser } = useVotes()

  return (
    <div className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'>
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>
      <div className='col gap-4 my-16'>
        {myUsers
          .sort((a, b) => b.allVoters.length - a.allVoters.length)
          .map((user) => (
            <div
              key={user.id}
              className='flex w-[380px] cursor-pointer px-6 py-[10px] bg-[#282838] rounded '
              onClick={() => {
                setCurrentUser(user)
                openModal()
              }}
            >
              <div>{user.id}</div>
              <div className='flex-1' />
              {/* <div>Total Votes: {user.allVoters.length}</div> */}
              <div className='col'>
                <div>Total Votes: {user.allVoters.length}</div>
                {/* <div>
                  {user.allVoters.map((vote, index) => (
                    <div key={index}>{vote}</div>
                  ))}
                </div> */}
              </div>
              {/* <div className='flex-1' /> */}
              {/* <div className='col'>
                <div>Direct Votes: {user.directVoters.length}</div>
                <div>
                  {user.directVoters.map((vote, index) => (
                    <div key={index}>{vote}</div>
                  ))}
                </div>
              </div> */}
            </div>
          ))}
      </div>
      <div className='cursor-pointer' onClick={() => setCurrentPage('Play')}>
        Go back
      </div>
    </div>
  )
}
