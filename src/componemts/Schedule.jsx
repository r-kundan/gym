import React from 'react'
import {Link} from 'react-router-dom'

function Schedule() {
  return (
    <div className=' h-[85vh]   flex items-center justify-center m-auto  bg-slate-30'>

    <div className='rounded-md md:p-4 md:w-[700px] bg-white  w-auto md:flex   shadow-2xl '>
      <div className=' bg-white rounded-md md:rounded-l-lg flex items-center  justify-center flex-col '>
        <form action="" className='flex p-2 flex-col items-center'>
          <h1 className='text-4xl font-bold'>What are your goals?</h1>
          <input className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="Weight Loss"
           
            required
          />
          <input
          className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="Muscle Gain"
         
            required
          />
          <input
          className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="Flexibility and Mobility"
          
            required
          />
          <input
          className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="General Fitness"
         
            required
          />
             <input
          className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="Event-specific training"
         
            required
          />
             <input
          className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
            type="text"
            placeholder="Mindfulness and Mental Health"
         
            required
          />
          <button type="submit" className=
          'bg-cyan-600 border-none rounded-full font-bold cursor-pointer text-xl outline-none p-2 w-40 text-white m-4'>
            Confirm
          </button>
        </form>
       
      </div>
      
      
     
    </div>
  </div>
  )
}

export default Schedule