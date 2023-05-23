import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

export default function Experience() {
  return (
    <div id='experience' className='bodyItemWrapper bg-[#030918]'>
      <SectionHeader title='Experience' />
      <div className='bodyItemContent'>
        <div className='col gap-24 text-center pt-2'>
          <Link href='https://sort.xyz' target='_blank'>
            <div className='experienceWrap'>
              <div className='experienceImageWrap'>
                <Image
                  alt='sort'
                  src='/img/sort.png'
                  width={192}
                  height={192}
                />
              </div>
              <div className='experienceTextWrap md:text-left'>
                <div className='experienceTitle'>Sort</div>
                Sort is a web app developed to enable easy and fast querying of
                data on the Ethereum ecossystem. Using blockchain technologies,
                the platform enables the user to login using their Ethereum
                wallet and explore transactions, contracts, tokens, and any
                Ethereum data they might have interest in, viewing them in
                clean, beautiful charts.
              </div>
            </div>
          </Link>
          <Link href='https://highlinefast.com' target='_blank'>
            <div className='experienceWrap flex-col-reverse md:flex-row'>
              <div className='experienceTextWrap md:text-right'>
                <div className='experienceTitle'>HighlineFast</div>
                HighlineFast is an internet provider company, which the website
                was developed for. Its purpose is to allow new prospects to know
                more about their product, check for its availability in their
                address, and order it if it is available.
              </div>

              <div className='experienceImageWrap'>
                <Image
                  alt='highline'
                  src='/img/highline.webp'
                  width={288}
                  height={288}
                />
              </div>
            </div>
          </Link>
          <Link href='https://bucketofcrabs.net' target='_blank'>
            <div className='experienceWrap'>
              <div className='experienceImageWrap'>
                <Image alt='boc' src='/img/boc.jpeg' width={288} height={288} />
              </div>
              <div className='experienceTextWrap md:text-left'>
                <div className='experienceTitle'>Bucket of Crabs</div>
                Bucket of Crabs is a company that matches Minecraft developers
                with Minecraft studios. This website purpose is to allow studios
                to post jobs and allow developers to browse these jobs and apply
                to ones they like.
              </div>
            </div>
          </Link>
          <Link href='https://womenbelong.com' target='_blank'>
            <div className='experienceWrap flex-col-reverse md:flex-row'>
              <div className='experienceTextWrap md:text-right'>
                <div className='experienceTitle'>Women Belong</div>
                Women Belong is a membership organization with the goal of
                connecting a diverse group of working women at all stages and
                levels of their career. The website purpose it to communicate
                with members and showcase the group events and benefits to
                prospect members.
              </div>

              <div className='experienceImageWrap'>
                <Image
                  alt='womenbelong'
                  src='/img/womenbelong.png'
                  width={288}
                  height={288}
                />
              </div>
            </div>
          </Link>
          <Link href='https://bannerwave.com' target='_blank'>
            <div className='experienceWrap'>
              <div className='experienceImageWrap'>
                <Image
                  alt='bannerwave'
                  src='/img/bannerwave.jpg'
                  width={288}
                  height={288}
                />
              </div>
              <div className='experienceTextWrap md:text-left'>
                <div className='experienceTitle'>Bannerwave</div>
                Bannerwave is a digital ads' company which provides services to
                many other companies. This website was developed to showcase
                their portfolio and invite prospect clients to get in touch and
                talk about future business.
              </div>
            </div>
          </Link>

          <Link href='https://github.com/xsantanax' target='_blank'>
            <div className='text-right text-blue-600 mt-[-42px] underline'>
              ... and more!
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
