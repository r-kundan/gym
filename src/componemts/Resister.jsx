import React from 'react'
import { Link } from 'react-router-dom'

function Resister() {
  return (
    <div className=' h-[85vh]   flex items-center justify-center m-auto  bg-slate-30'>

      <div className='rounded-md md:p-4 md:w-[700px] bg-white  w-auto md:flex   shadow-2xl '>
        <div className=' bg-white rounded-md md:rounded-l-lg flex items-center  justify-center flex-col '>
          <form action="" className='flex p-2 flex-col items-center'>
            <h1 className='text-4xl font-bold'>Create Account</h1>
            <input className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="text"
              placeholder="First Name"
              name="First Name"
              required
            />
            <input
            className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="text"
              placeholder="Last Name"
              name="Last Name"
              required
            />
            <input
            className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="text"
              placeholder="Email"
              name="email"
              required
            />
            <input
            className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="text"
              placeholder="Password"
              name="password"
              required
            />
            <button type="submit" className=
            'bg-cyan-600 border-none rounded-full font-bold cursor-pointer text-xl outline-none p-2 w-40 text-white m-4'>
							Register
						</button>
          </form>
          <fieldset class="border-t border-gray-300 w-96   md:block hidden ">
          <legend class="text-lg text-center p-2 font-semibold">or</legend>
          <div className=' w-32 flex  justify-evenly items-center m-3 '>
         <h3 className='p-2 rounded border-2'> <svg className='w-6 h-6 fill-green-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></h3>

          <h3 className='p-2 rounded border-2'>
          <svg className='w-6 h-6 fill-blue-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
          </h3>
          </div>
          </fieldset>
        </div>
        <div className='flex flex-col items-center justify-center bg-cyan-600 shadow-2xl m-4 md:m-0 md:p-5 p-2  md:rounded-r-lg rounded-md'>
          <h1 className='text-white text-3xl font-extrabold'>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className='bg-white border-none rounded-full font-bold cursor-pointer text-xl outline-none p-2  w-40 text-black m-4'>
              Log In
            </button>
          </Link>
        </div>
        <fieldset class="border-t border-gray-300 w-96  flex justify-center md:hidden ">
          <legend class="text-lg text-center p-2 font-semibold">or</legend>
          <div className=' w-32 flex  justify-evenly items-center m-3 '>
         <h3 className='p-2 rounded border-2'> <svg className='w-6 h-6 fill-green-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg></h3>

          <h3 className='p-2 rounded border-2'>
          <svg className='w-6 h-6 fill-blue-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
          </h3>
          </div>
          </fieldset>
      </div>
    </div>
  )
}

export default Resister