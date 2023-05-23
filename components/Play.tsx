'use client'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

export default function Play() {
  const [yourEmail, setYourEmail] = useState('')
  const [theirEmail, setTheirEmail] = useState('')
  const [showYourEmail, setShowYourEmail] = useState(false)
  const [concluded, setConcluded] = useState(false)

  const handleSubmit1 = (e: any) => {
    e.preventDefault()
    setShowYourEmail(true)
  }

  const handleSubmit2 = (e: any) => {
    e.preventDefault()
    setConcluded(true)
  }

  return (
    <div id='about' className='bodyItemWrapper'>
      {/* <SectionHeader title='Play' /> */}
      <div className='mb-2'>To play, think of a close political leader.</div>
      <div className='mb-[72px]'>
        Someone succesful, who you listens to, and you can talk to with ease.
      </div>

      {!showYourEmail && !concluded && (
        <>
          <div>Type in the email of your chosen one.</div>
          <form onSubmit={handleSubmit1} className='gap-5 py-10 col w-[400px]'>
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
      {showYourEmail && !concluded && (
        <>
          <div>
            You are chosing {theirEmail}.
            <span
              className='cursor-pointer ml-4 text-[16px] text-blue-600'
              onClick={() => setShowYourEmail(false)}
            >
              Change
            </span>
          </div>

          <div className='mt-16'>Type in your email to confirm your vote.</div>
          <form onSubmit={handleSubmit2} className='gap-5 py-10 col w-[400px]'>
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
      {concluded && (
        <>
          <div>Confirme seu voto clicando no link enviado ao seu email.</div>
          <div className='mb-16 mt-10'>
            Seu voto sera computado para:{' '}
            <span className='underline'>{theirEmail}</span>
          </div>
          {/* <UserCard /> */}
          <div className='flex gap-8 '>
            <button
              type='submit'
              // disabled={!theirEmail || !email || !text}
              className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Ja confirmei</div>
            </button>

            <button
              type='submit'
              // disabled={!theirEmail || !email || !text}
              className='bg-[#2145AF] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Ver resultados</div>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
