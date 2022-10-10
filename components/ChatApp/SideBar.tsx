import React, { useContext, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
const SideBar = () => {
  const router = useRouter()
  const {user} = useContext(UserContext);
  return (
    <section>
      <motion.div
        className="text-4xl p-4 text-red-600 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => router.push("/")}
      >
        <IoArrowBackCircle />
      </motion.div>
      <div className="p-4 flex gap-2 items-center bg-gray-600 text-white">
        <div className=" overflow-hidden  ">
          <Image src={user?.photoURL as string} alt="name" width={"32px"} height={"32px"}></Image>
        </div>
        <div className="flex flex-col">
          <div className="font-normal text-xs">{user?.displayName}</div>
          <div className="font-light text-xs">{user?.uid}</div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
