import './App.css'
import { useEffect } from 'react'
import Aos from 'aos'
import AllRoutes from './Routes/AllRoutes'

function App() {

  useEffect
  (()=>{
    Aos.init();
  },[])

  return (
    <>
     {/* <Layout/> */}
     <AllRoutes/>
    </>
  )
}

export default App
