'use client'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function Play() {
  const [yourEmail, setYourEmail] = useState('')
  const [theirEmail, setTheirEmail] = useState('')
  const [showYourEmail, setShowYourEmail] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setShowYourEmail(true)
  }
  return (
    <div id='about' className='bodyItemWrapper'>
      {/* <SectionHeader title='Play' /> */}
      {!showYourEmail && (
        <>
          <div>Type in the email of your chosen one.</div>
          <form onSubmit={handleSubmit} className='gap-5 py-10 col w-[400px]'>
            <input
              value={theirEmail}
              className='input'
              type='text'
              placeholder='His/her email'
              onChange={(e) => setTheirEmail(e.target.value)}
            />
            <button
              type='submit'
              // disabled={!theirEmail}
              className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Confirm</div>
              <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
            </button>
          </form>
        </>
      )}
      {showYourEmail && (
        <>
          <div>
            You are chosing {theirEmail}.
            <span
              className=' ml-4 text-[16px] text-blue-600'
              onClick={() => setShowYourEmail(false)}
            >
              Change
            </span>
          </div>

          <div className='mt-16'>Type in your email to confirm your vote.</div>
          <form onSubmit={handleSubmit} className='gap-5 py-10 col w-[400px]'>
            <input
              value={yourEmail}
              className='input'
              type='text'
              placeholder='Your email'
              onChange={(e) => setYourEmail(e.target.value)}
            />
            <button
              type='submit'
              // disabled={!theirEmail || !email || !text}
              className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Confirm</div>
              <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
            </button>
          </form>
        </>
      )}
    </div>
  )
}
