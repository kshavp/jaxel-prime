import React from 'react'
import SubmitBtn from '../components/SubmitBtn'
import axios from 'axios'

const submitHandler = (e) =>{
  e.preventDefault();
  
  // axios.post('/',data)
}

const ToJSON = () => {
  return (
    <div className='p-8 bg-neutral-800 text-neutral-300 h-screen'>
        <form action="" className='flex flex-col mx-auto' onSubmit={submitHandler}>
            <input type="file" name="" id="" />
            <SubmitBtn />
        </form>
    </div>
  )
}

export default ToJSON