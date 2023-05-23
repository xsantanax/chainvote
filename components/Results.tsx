import Image from 'next/image'

export default function Home({ setCurrentPage }: any) {
  return (
    <div
      id='/'
      className=' w-full min-h-[766px] px-8 md:px-16 col items-center justify-center text-shadow-mine shadow-blue-900'
    >
      <div className='text-[32px] md:text-[40px] font-[600]'>Results</div>
      <div className='py-[20px] text-[52px] md:text-[60px]  '></div>
      <Image src='/img/foto.jpg' width={150} height={200} alt='' />

      <>
        <div
          className='cursor-pointer my-10'
          onClick={() => setCurrentPage('Play')}
        >
          Go back
        </div>
      </>
    </div>
  )
}
