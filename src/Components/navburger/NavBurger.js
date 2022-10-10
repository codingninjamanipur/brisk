import React, { useEffect } from "react";
import { NavBurgerContext } from "../../contexts/Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const NavBurger = () => {
  //   const bar = [1, 2, 3];
  const [navBurgerState, toggleNavBurgerState] = useContext(NavBurgerContext);

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
