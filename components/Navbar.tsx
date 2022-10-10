
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import Logo from "../public/logo.png"
import {motion, useCycle} from "framer-motion" 
import {IoArrowForwardCircle} from "react-icons/io5"
import Image from 'next/image'
import NavBurger from './navburger/NavBurger'
import NavList from './navburger/NavList'
import { auth } from '../firebase/firebase.utils'
import { signOut } from 'firebase/auth'
const Navbar = () => {
  const {user} = useContext(UserContext)
  const router = useRouter()
  const [navBurgerState, toggleNavBurgerState] = useCycle<boolean>(true, false);
  const [signOutModal, setSignOutModal] = useState<boolean>(false);
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setSignOutModal(false);
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const signOutModalHandler = () => {
    setSignOutModal(true);
  };
  return (
  <section className='max-w-5xl w-full mx-auto p-8 flex justify-between'>      
    <span
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image src={Logo} alt="logo" width={"32px"} height={"32px"} />
      <span className="font-bold text-xl text-white">
        brisk<span className="text-blue-500">.</span>
      </span>
    </span>
      <div className="relative flex gap-4 items-center">
        {user && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-4xl text-green-600"
            onClick={() => router.push("/chatapp")}
          >
            <IoArrowForwardCircle />
          </motion.div>
        )}
        {user && (
          <div
            onClick={() => router.push("/profile")}
            className="cursor-pointer rounded-full overflow-hidden h-8 w-8  border-2 border-emerald-500"
          >
            <Image src={user?.photoURL as string} alt="profile" height={"32px"} width={"32px"}></Image>
          </div>
        )}

        <NavBurger toggleNavBurgerState={toggleNavBurgerState} navBurgerState={navBurgerState}/>
        <NavList signOutModalHandler={signOutModalHandler} toggleNavBurgerState={toggleNavBurgerState} navBurgerState={navBurgerState}/>
        </div>
        {signOutModal ? (
        <div className="absolute flex flex-col items-center gap-2 bg-gray-200 p-4">
          <div className="font-bold ">Are you sure?</div>
          <div className=" flex gap-4">
            <button
              onClick={signOutHandler}
              className="bg-red-600 px-4 py-2 text-white"
            >
              yes
            </button>{" "}
            <button
              onClick={() => setSignOutModal(false)}
              className="bg-green-600 px-4 py-2 text-white"
            >
              no
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
  </section>
  )
}

export default Navbar