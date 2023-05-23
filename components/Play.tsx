'use client'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import Image from 'next/image'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

const handleSubmit = () => null

export default function Play() {
  const [name, setName] = useState('')

  return (
    <div id='about' className='bodyItemWrapper'>
      {/* <SectionHeader title='Play' /> */}
      {/* <div className='bodyItemContent flex-col-reverse md:flex-row'> */}
      <div className='col'>Type in the email of your chosen one.</div>
      <form onSubmit={handleSubmit} className='gap-5 py-10 col w-[400px]'>
        <input
          value={name}
          className='input'
          type='text'
          placeholder='His/her email'
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type='submit'
          // disabled={!name || !email || !text}
          className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
        >
          <div>Confirm</div>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
        </button>
      </form>
      {/* </div> */}
    </div>
  )
}
