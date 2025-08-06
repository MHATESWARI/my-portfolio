import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Project from '../components/Project'
import About from '../components/About'

const Layout = () => {
  return (
    <>
    <div className=''>
        <div className=''>
           <Navbar/>
        </div>
        <div>
         <About/>
        </div>
        <div>
         <Project/>
        </div>
        <div>
          <Contact/>
        </div>

    </div>
    
    
    </>
  )
}

export default Layout