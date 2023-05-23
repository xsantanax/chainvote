'use client'
import { useState } from 'react'
import Play from '../components/Play'
import Results from '../components/Results'

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState('Play')

  return (
    <>
      {currentPage == 'Play' && <Play setCurrentPage={setCurrentPage} />}
      {currentPage == 'Results' && <Results setCurrentPage={setCurrentPage} />}
    </>
  )
}
