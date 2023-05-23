import '../styles/globals.css'
import Header from '../components/Header'
import HeaderMobile from '../components/HeaderMobile'
import { Toaster } from 'react-hot-toast'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Toaster position='top-right' />
        <div className='md:hidden'>
          <HeaderMobile />
        </div>
        <div className='hidden md:block'>
          <Header />
        </div>
        {children}
      </body>
    </html>
  )
}
