import React, { useState,useEffect } from 'react';

function BMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    // const [bmi, setBMI] = useState(null);
    const [bmi, setBMI] = useState(localStorage.getItem('bmi') || 0);



        useEffect(() => {
            if (bmi === 0) {
                localStorage.removeItem('bmi');
              } else {
                localStorage.setItem('bmi', bmi);
              }
          }, [bmi]);
   

  
    const calculateBMI = () => {
        
        if (weight && height) {
          const heightInMeters = height / 100; // Convert height from cm to meters
          const bmiValue = weight / (heightInMeters * heightInMeters);
          setBMI(bmiValue.toFixed(2)); // Limit to two decimal places
        } else {
          alert('Please enter both weight and height.');
        }
      };
      useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);
    
      const handleBeforeUnload = () => {
        localStorage.removeItem('bmi');
      };
    
    
  let bmiCategory = '';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Normal weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
  } else {
    bmiCategory = 'Obesity';
  }


    return (

        <div className=' h-[85vh]   flex items-center justify-center m-auto  bg-slate-30'>

      <div className='rounded-md md:p-4 md:h-[400px] md:w-[700px] bg-white  w-auto md:flex   shadow-2xl '>
        <div className=' bg-white rounded-md md:rounded-l-lg flex items-center justify-center flex-col '>
          <form action="" className='flex p-2 flex-col items-center'>
            <h1 className='text-4xl font-bold'>BMI Calulator</h1>
         
            <input
            className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="number"
              placeholder="Weight kg"
          
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <input
            className='w-[380px] p-2 rounded-md m-2 text-xl outline-none bg-[#edf5f3]'
              type="text"
              placeholder="Height cm"
              value={height}
          onChange={(e) => setHeight(e.target.value)}
              required
            />
            <button type="submit" onClick={calculateBMI} className=
            'bg-cyan-600 border-none rounded-full font-bold cursor-pointer text-xl outline-none p-2 w-40 text-white m-4'>
							calculator
						</button>
          
          </form>
         
        </div>
        <div className='flex flex-col items-center justify-center bg-cyan-600 shadow-2xl m-4 md:m-0 md:p-5 p-2  md:rounded-r-lg rounded-md'>
          <h1 className='text-white text-2xl font-extrabold flex'>Your BMI:- &nbsp; {bmi && <p> {bmi}</p>}</h1>


          <p className='text-white text-md flex'>BMI Category: {bmiCategory}</p>
     
       
        </div>
    
      </div>
    </div>

    )
}

export default BMI