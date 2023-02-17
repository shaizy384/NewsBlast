import React from 'react'
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <div className='text-center'>
        <img className="my-4" src={loading} alt="loading" />
      </div>
    </div>
  )
}

