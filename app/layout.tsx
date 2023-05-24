'use client'
import { useState } from 'react'
import Modal from '../components/Modal'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [isModalOpen, setIsModalOpen] = useState(true)
  return (
    <html>
      <head />
      <body>
        <Toaster position='top-right' />
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        {children}
      </body>
    </html>
  )
}
