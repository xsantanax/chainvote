export default function Home() {
  return (
    <div
      id='/'
      style={{ backgroundImage: 'url(img/nightcity.jpg)' }}
      className='bg-center bg-cover h-screen w-full min-h-[766px] px-8 md:px-16 flex justify-center text-shadow-mine shadow-blue-900'
    >
      <div className='max-w-[1560px] w-full '>
        <div className='pt-[108px] md:pt-[128px] '>Hi, I am</div>
        <div className='py-[20px] text-[52px] md:text-[60px] font-bold leading-[1.1] '>
          Rafael Santana
        </div>
        <div>
          A software engineer specialized in building amazing digital
          experiences.
        </div>
      </div>
    </div>
  )
}
