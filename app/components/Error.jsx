import React from 'react';

export default function Error({message}) {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <h2 className='text-2xl'><span className='text-red-500'>Error:</span> {message}</h2>
    </div>
  )
}
