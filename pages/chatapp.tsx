import { NextPage } from 'next'
import React from 'react'
import Chat from '../components/ChatApp/Chat'
import RightBar from '../components/ChatApp/RightBar'
import SideBar from '../components/ChatApp/SideBar'
import Navbar from '../components/Navbar'
import { UserProvider } from '../contexts/UserContext'


const Chatapp:NextPage = () => {
  return (
    <UserProvider>
        <ChatappChildren/>
    </UserProvider>
  )
}
const ChatappChildren = () => {
    return (
      <div className='text-gray-900'>

      <div className="flex bg-gray-100">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-2/4">
          <Chat />
        </div>
        <div className="w-1/4">
          <RightBar />
        </div>
      </div>
    </div>
    )
}


export default Chatapp