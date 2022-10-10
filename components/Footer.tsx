import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from "../public/logo.png";
const Footer = () => {
    const router = useRouter()
  return (
    <footer className="w-full bg-gray-300 ">
    <div className="max-w-5xl mx-auto p-8 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={Logo} alt="logo" width={38} height={38} />
          <span className="font-bold text-xl text-gray-900">brisk.</span>
        </span>
        <span className="text-sm text-gray-900">brisk your messages</span>
      </div>
      <div className="h-0.5 bg-gray-400"></div>
      <div className="text-sm text-gray-900">© 2022 Brisk.co </div>
    </div>
  </footer>
  )
}

export default Footer