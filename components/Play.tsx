'use client';
import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function Play({ setCurrentPage }: any) {
  const [yourEmail, setYourEmail] = useState('');
  const [theirEmail, setTheirEmail] = useState('');
  const [showYourEmail, setShowYourEmail] = useState(false);
  const [concluded, setConcluded] = useState(false);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmit1 = (e: any) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(theirEmail)) setError(true);
    else {
      setShowYourEmail(true);
      setError(false);
    }
  };

  const handleSubmit2 = async (e: any) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(yourEmail)) setError2(true);
    else {
      //if circular vote -> error
      // else post vote
      //find index
      // let index = users.findIndex((obj) => obj.id == from)

      const vote = {
        from: yourEmail,
        to: theirEmail,
        createdAt: serverTimestamp()
      };

      await addDoc(collection(db, 'votes'), vote);
      setConcluded(true);
      setError2(false);
      // now send mail
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          yourEmail,
          theirEmail
          // message: message,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      // console.log(fullname, email, subject, message);
    }
  };

  return (
    <div id='about' className='bodyItemWrapper'>
      <div className='mb-10 text-[26px] font-[600]'>CHOSEN.WIKI</div>
      <div className='mb-[30px]'>Think of a close political leader.</div>
      <div className='mb-[30px]'>
        Someone succesful, who you listen to and can talk to with ease.
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
            {error && (
              <div className='ml-1 -mt-3 mb-1 text-red-600 text-[16px]'>
                invalid email
              </div>
            )}
            <button
              type='submit'
              className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Confirm</div>
              <PaperAirplaneIcon className='h-4 w-4 -rotate-45 mt-[3px] ml-3' />
            </button>
          </form>
          <div
            className='cursor-pointer mt-[16px] text-[16px] text-blue-600'
            onClick={() => setCurrentPage('Results')}
          >
            See results
          </div>
        </>
      )}
      {showYourEmail && !concluded && (
        <>
          <div>
            You are choosing <u>{theirEmail}</u>.
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
            {error2 && (
              <div className='ml-1 -mt-3 mb-1 text-red-600 text-[16px]'>
                invalid email
              </div>
            )}
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
          {/* <div>Confirme seu voto clicando no link enviado ao seu email.</div>
          <div className='mb-16 mt-10'>
            Seu voto sera computado para:{' '}
            <span className='underline'>{theirEmail}</span>
          </div> */}
          <div>
            You successfully voted in <u>{theirEmail}</u>
          </div>
          {/* <UserCard /> */}
          <div className='flex gap-8 mt-12'>
            {/* <button
              type='submit'
              // disabled={!theirEmail || !email || !text}
              className='bg-[#11A37F] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150
                       disabled:cursor-not-allowed disabled:bg-gray-300 '
            >
              <div>Ja confirmei</div>
            </button> */}

            <button
              type='submit'
              className='bg-[#2145AF] flex justify-center text-white font-bold px-4 py-2 rounded hover:opacity-50 duration-150'
            >
              <div onClick={() => setCurrentPage('Results')}>
                Ver resultados
              </div>
            </button>
          </div>
        </>
      )}
      {/* <VoteList /> */}
    </div>
  );
}
