import React, { useEffect } from "react";

import { useContext } from "react";
import { motion } from "framer-motion";

interface PROPS{
  navBurgerState: any,
  toggleNavBurgerState: any
}

const NavBurger:React.FC<PROPS> = ({navBurgerState,toggleNavBurgerState}) => {
  //   const bar = [1, 2, 3];
  

  const navBurgerHandler = () => {
    toggleNavBurgerState();
  };

  return (
    <button onClick={() => navBurgerHandler()}>
      <ul className="flex flex-col gap-1">
        <motion.li
          className="h-1 w-6 bg-white rounded"
          animate={navBurgerState ? "closed" : "open"}
          variants={{
            closed: { rotate: 0 },
            open: { rotate: -45, y: 5 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
        ></motion.li>
        <motion.li
          className="h-1 w-6 bg-white rounded"
          animate={!navBurgerState ? "closed" : "open"}
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 1 },
          }}
          transition={{
            duration: 0.2,
          }}
        ></motion.li>
        <motion.li
          className="h-1 w-6 bg-white rounded"
          animate={navBurgerState ? "closed" : "open"}
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 45, y: -11 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
          }}
        ></motion.li>
      </ul>
    </button>
  );
};

export default NavBurger;
