import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavBurgerContext,
  SignedInContext,
  UserContext,
} from "../../contexts/Context";
import { useLocation, useNavigate } from "react-router-dom";
const NavList = ({ signOutModalHandler }) => {
  const [user] = useContext(UserContext);
  const pages = ["home", "signin", "about", "contact"];
  const [signedIn] = useContext(SignedInContext);

  const path = useLocation();
  let inActivePages = pages;
  let currentPath = path.pathname;
  if (currentPath === "/") {
    inActivePages.shift();
  } else {
    // /signin !== /signin
    inActivePages = pages.filter((page) => "/" + page !== currentPath);
  }

  const [navBurgerState, toggleNavBurgerState] = useContext(NavBurgerContext);
  const navigate = useNavigate();
  const navLinkHandler = (link) => {
    if (link === "home") {
      link = "/";
    } else {
      link = "/" + link;
    }
    navigate(link);
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
        el === "signin" && signedIn ? (
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
};

export default NavList;
