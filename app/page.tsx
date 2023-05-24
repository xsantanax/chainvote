'use client'
import { useState } from 'react'
import Play from '../components/Play'
import Results from '../components/Results'
import Modal from '../components/Modal'
import VoteList from '../components/VoteList'

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('Play')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} children={<VoteList />} />
      )}
      {currentPage == 'Play' && <Play setCurrentPage={setCurrentPage} />}
      {currentPage == 'Results' && (
        <Results
          setCurrentPage={setCurrentPage}
          openModal={() => setIsModalOpen(true)}
        />
      )}
    </>
  )
}
