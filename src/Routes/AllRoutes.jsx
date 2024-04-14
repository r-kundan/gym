import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../componemts/Home.jsx';
import Layout from '../layout/Layout.jsx';
import Login from '../componemts/Login.jsx';
import Resister from '../componemts/Resister.jsx';
import Schedule from '../componemts/Schedule.jsx';
import BMI from '../componemts/BMI.jsx';

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
     <Route path='/schedule' element={<Schedule/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Resister/>}/>
     <Route path='/bmi' element={<BMI/>}/>



  
    </Route>
        </Routes>
    </div>
  )
}

export default AllRoutes