import React from 'react'

function JourneyCard({discription ,icon,title,plan,list1,list2,list3}) {
  return (
    <div className='flex w-[300px]  h-[380px] justify-center items-center  hover:scale-y-[1.22] bg-gradient-to-b from-teal-600 to-black rounded-lg' 
    data-aos='zoom-in'
    data-aos-duration='1000'
    >
     
<div className='flex flex-col gap-4'>
<h1 className='w-10 h-10  fill-white' data-aos='fade-left'
    data-aos-duration='1500'
    data-aos-delay="100">{icon}</h1>
        <h3 className='font-semibold text-xl'
        data-aos='fade-left'
        data-aos-duration='1500'
        data-aos-delay="200"
        >{title}</h3>
        <p className='font-thin'
        data-aos='fade-left'
        data-aos-duration='1500'
        data-aos-delay="300">{discription}</p>
       <div>
      <h4 className='text-4xl pb-4 font-bold'
      data-aos='fade-left'
      data-aos-duration='1500'
      data-aos-delay="400">{plan}</h4>
        <ul>
            <li data-aos='fade-left'
    data-aos-duration='1500'
    data-aos-delay="500">§ {list1}</li>
            <li data-aos='fade-left'
    data-aos-duration='1500'
    data-aos-delay="600">§ {list2}</li>
            <li data-aos='fade-left'
    data-aos-duration='1500'
    data-aos-delay="700">§ {list3}</li>
        </ul>
       </div>

        <h6 data-aos='fade-up'
    data-aos-duration='1500'
    data-aos-delay="800" className='flex gap-4 p-1 rounded-md font-extrabold text-gray-800 justify-center items-center bg-teal-400 w-44'>Join Now</h6>

</div>

    </div>
  )
}

export default JourneyCard