import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { UserContext, UserProvider } from '../contexts/UserContext'
import Layout from '../lib/Layout'


const Profile:NextPage = () => {

  return (
    <UserProvider>
        <Layout>
        <ProfileChildren/>
        </Layout>
    </UserProvider>
  )
}

export default Profile

const ProfileChildren = () =>{
    const {user} = useContext(UserContext)
    const router = useRouter()
    return <section className="max-w-5xl w-full mx-auto p-8 flex flex-col gap-4">
      <div className=" flex gap-4 items-center">
        <div className="">
          <Image
            className="border-2 border-black"
            src={user?.photoURL as string}
            alt="profilepic"
            height={"100px"}
            width={"100px"}
          />
        </div>
        <div>
          <div className="flex gap-2">
            <div className="font-semibold">Username: </div>
            <div> {user?.displayName}</div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">Email: </div>
            <div> {user?.email}</div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">User ID: </div>
            <div> {user?.uid}</div>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-gray-700 underline underline-offset-8 cursor-pointer"
          onClick={() => router.push("/signin")}
        >
          Sign in from another account
        </h2>
      </div>
      <div className="h-96"></div>
    </section>
}