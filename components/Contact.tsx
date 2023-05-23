'use client'
import { FormEvent, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast'

import {
  collection,
  addDoc,
  serverTimestamp
  //doc, deleteDoc, orderBy, query
} from 'firebase/firestore'
import { db } from '../firebase'
import SectionHeader from './SectionHeader'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const [messages] = useCollection(
    // collection(db, "users", session?.user?.email!, "chats", id, "messages")
    collection(db, 'messages')
  )

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text) {
      toast.error('Empty message')
      return
    }

    const message: Message = {
      name,
      email,
      text,
      createdAt: serverTimestamp()
      // user: {
      //   _id: session?.user?.email!,
      //   name: session?.user?.name!,
      //   avatar:
      //     session?.user?.image ||
      //     `https://ui-avatars.com/api/?name=${session?.user?.name!}`
      // }
    }

    const notification = toast.loading('Sending message...')

    await addDoc(
      collection(
        db,
        // "users",
        // session?.user?.email!,
        // "chats",
        // chatId,
        'messages'
      ),
      message
    ).then(() => {
      toast.success('Message sent!', { id: notification })
    })
  }

  return (
    <div id='contact' className='bodyItemWrapper'>
      <SectionHeader title='Contact' />
      <div className='bodyItemContent col items-center text-center'>
        <div className='text-[20px] mt-[20px]'>
          Want to build your own stunning project?
        </div>
        <div className='font-[600] text-[20px] -mt-[10px] mb-[40px]'>
          Message me.
        </div>
        <form onSubmit={sendMessage} className='gap-5 col w-full'>
          <input
            value={name}
            className='input'
            type='text'
            placeholder='Your name'
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            className='input'
            type='text'
            placeholder='Your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={text}
            className='input h-[160px]'
            placeholder='Type your message here...'
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type='submit'
            // disabled={!name || !email || !text}
            className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
          >
            <div>Send</div>
            <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
          </button>
        </form>
        {/* {messages?.docs.map((message) => (
          <div
            key={message.id}
            className='flex  items-center space-x-4 p-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer'
          >
            {message.data().text}
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Contact
