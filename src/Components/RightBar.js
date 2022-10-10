import React, { useContext } from "react";
import { UserContext } from "../contexts/Context";
import { motion } from "framer-motion";
const RightBar = () => {
  const [user] = useContext(UserContext);
  const friendsData = ["Levy", "Devia", "Raygyan"];
  const variantsUl = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const variantsLi = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        type: "spring",
        stagger: 500,
      },
    },
  };

  return (
    <section>
      <motion.ul
        className="p-4 flex flex-col gap-2"
        variants={variantsUl}
        animate="open" //name should match with children i.e. children variant should be "x" if parent variant is "x"
      >
        {friendsData.map((el, idx) => (
          <motion.li
            className="flex gap-2 items-center"
            key={idx}
            variants={variantsLi}
            animate={{ y: [10, 0], opacity: [0, 1] }}
          >
            <div className="h-8 w-8 rounded-full bg-gray-600"></div>
            <div className="text-normal text-sm">{el}</div>
            <div className="h-2 w-2 bg-green-600 rounded-full"></div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default RightBar;
