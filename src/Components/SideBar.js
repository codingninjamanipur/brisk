import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { UserContext } from "../contexts/Context";
import { motion } from "framer-motion";
const SideBar = () => {
  const navigate = useNavigate();
  const [user] = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <section>
      <motion.div
        className="text-4xl p-4 text-red-600 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
      >
        <IoArrowBackCircle />
      </motion.div>
      <div className="p-4 flex gap-2 items-center bg-gray-600 text-white">
        <div className="rounded-full overflow-hidden w-10 h-10 ">
          <img src={user.photoURL} alt="name"></img>
        </div>
        <div className="flex flex-col">
          <div className="font-normal text-xs">{user.displayName}</div>
          <div className="font-light text-xs">{user.uid}</div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
