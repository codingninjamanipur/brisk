import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Url } from "url";
import { UserContext } from "../../contexts/UserContext";

interface PROPS {
  signOutModalHandler: ()=>void,
  navBurgerState: boolean,
  toggleNavBurgerState: any
}

const NavList:React.FC<PROPS> = ({ signOutModalHandler,navBurgerState,toggleNavBurgerState }) => {
  const {user} = useContext(UserContext)
  const pages = ["home", "signin", "about", "contact"];

  const router = useRouter();
  const currentPath = router.pathname
  let inActivePages = pages;
  if (currentPath === "/") {
    inActivePages.shift();
  } else {
    // /signin !== /signin
    inActivePages = pages.filter((page) => "/" + page !== currentPath);
  }
  const navLinkHandler = (link: Url | string) => {
    if (link === "home") {
      link = "/";
    } else {
      link = "/" + link;
    }
    router.push(link);
    toggleNavBurgerState();
  };
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
        stagger: 200,
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        type: "spring",
        stagger: 200,
      },
    },
  };

  return (
    <motion.ul
      className="absolute -translate-x-24 translate-y-24 flex flex-col gap-2 items-end p-4 text-white"
      animate={!navBurgerState ? "open" : "closed"}
      variants={variantsUl}
    >
      {inActivePages.map((el, idx) =>
        el === "signin" && user ? (
          <motion.li
            key={idx}
            className="cursor-pointer"
            variants={variantsLi}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signOutModalHandler()}
          >
            signout
          </motion.li>
        ) : (
          <motion.li
            key={idx}
            className="cursor-pointer"
            variants={variantsLi}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navLinkHandler(el)}
          >
            {el}
          </motion.li>
        )
      )}
    </motion.ul>
  );
}

export default NavList