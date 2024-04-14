import React from 'react'

function JourneyCard({discription ,icon,title,plan,list1,list2,list3}) {
  return (
    <div className='flex w-[300px]  h-[380px] justify-center items-center  hover:scale-y-[1.22] bg-gradient-to-b from-teal-600 to-black rounded-lg'>
     
<div className='flex flex-col gap-4'>
<h1 className='w-10 h-10  fill-white '>{icon}</h1>
        <h3 className='font-semibold text-xl'>{title}</h3>
        <p className='font-thin'>{discription}</p>
       <div>
      <h4 className='text-4xl pb-4 font-bold'>{plan}</h4>
        <ul>
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
        </ul>
       </div>

        <h6 className='flex gap-4 p-1 rounded-md font-extrabold text-gray-800 justify-center items-center bg-teal-400 w-44'>Join Now</h6>

</div>

    </div>
  )
}

export default JourneyCard