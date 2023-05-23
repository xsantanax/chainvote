import SectionHeader from '../components/SectionHeader'
import Image from 'next/image'

function About() {
  return (
    <div id='about' className='bodyItemWrapper'>
      <SectionHeader title='About' />
      <div className='bodyItemContent flex-col-reverse md:flex-row'>
        <div className='col'>
          <div>
            Hello! My name is Rafael and I am a software engineer who loves
            building the internet. My interest in app development started back
            in 2014 when I decided to start building Android apps. Soon I also
            started developing web and mobile apps (iOS and Android), and I've
            been working building apps ever since.
          </div>
          <div className='mt-6'>
            Today I’ve had the privilege of working at startups, banks, and app
            development companies in Brazil and the United States. My main focus
            now is developing amazing digital experiences.
          </div>
          <div className='mt-6'>
            Here are a few technologies I’ve been working with recently:
          </div>
          <div className='flex mt-6 italic'>
            <div className='col w-[64%]'>
              <div>Javascript</div>
              <div>Typescript</div>
              <div>React</div>
              <div>React Native</div>
              <div>Next.js</div>
              <div>Tailwind CSS</div>
              <div>Styled Components</div>
            </div>
            <div className='col w-[36%]'>
              <div>Node.js</div>
              <div>Firebase</div>
              <div>MongoDB</div>
              <div>GraphQL</div>
              <div>Python</div>
              <div>AWS</div>
              <div>GCP</div>
            </div>
          </div>
        </div>
        <Image
          alt='me'
          src='/img/foto.jpg'
          className='object-cover h-72'
          width={200}
          height={288}
        />
      </div>
    </div>
  )
}

export default About
