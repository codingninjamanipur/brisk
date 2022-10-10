import React, { ReactNode } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { UserProvider } from '../contexts/UserContext'

const Layout:React.FC<{children:ReactNode}> = ({children}) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout