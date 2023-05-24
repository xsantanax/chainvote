'use client'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { VotesProvider } from '../hooks/useVotes'

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
        <VotesProvider>{children}</VotesProvider>
      </body>
    </html>
  )
}
