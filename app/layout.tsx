import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Toaster position='top-right' />
        {children}
      </body>
    </html>
  )
}
