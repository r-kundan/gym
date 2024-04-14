import React from 'react'
import Footer from '../componemts/Footer.jsx'
import Header from '../componemts/Header.jsx'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
<>
<Header></Header>
<Outlet></Outlet>
<Footer></Footer>
</>  )
}

export default Layout