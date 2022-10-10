import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  NavBurgerContext,
  PageContext,
  SignedInContext,
  UserContext,
} from "../contexts/Context";
import { IoArrowForwardCircle } from "react-icons/io5";
import { getAuth, signOut } from "firebase/auth";
import NavBurger from "./navburger/NavBurger";
import NavList from "./navburger/NavList";
import { motion } from "framer-motion";
const Nav = () => {
  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useContext(PageContext);
  const [signedIn, setSignedIn] = useContext(SignedInContext);
  const [signOutModal, setSignOutModal] = useState(false);
  const [navBurgerState, setNavBurgerState] = useContext(NavBurgerContext);
  const navigate = useNavigate();
  const path = useLocation();

  useEffect(() => {
    setPage(path.pathname);
  }, []);

  const signOutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        setSignedIn(false);
        setSignOutModal(false);
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const signOutModalHandler = () => {
    setSignOutModal(true);
  };
  return (
    <div className="  max-w-5xl w-full mx-auto p-8 flex justify-between">
      <span
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="logo" width={"32px"} />
        <span className="font-bold text-xl text-white">
          brisk<span className="text-blue-500">.</span>
        </span>
      </span>
      <div className="relative flex gap-4 items-center">
        {signedIn && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer text-4xl text-green-600"
            onClick={() => navigate("/chatapp")}
          >
            <IoArrowForwardCircle />
          </motion.div>
        )}
        {signedIn && (
          <div
            onClick={() => navigate("/profile")}
            className="cursor-pointer rounded-full overflow-hidden h-8 w-8  border-2 border-emerald-500"
          >
            <img src={user.photoURL} alt="profile"></img>
          </div>
        )}

        <NavBurger />
        <NavList signOutModalHandler={signOutModalHandler} />
      </div>
      {/* <nav>
          <ul className="flex gap-4 items-center">
            {page !== "/" && (
              <li>
                <Link to="/">home</Link>
              </li>
            )}
            {signedIn ? (
              <ul className="flex gap-4 items-center">
                <li className="cursor-pointer" onClick={signOutModalHandler}>
                  sign out
                </li>
                <li
                  className="cursor-pointer text-4xl text-green-600"
                  onClick={() => navigate("/chatapp")}
                >
                  <IoArrowForwardCircle />
                </li>
                <li
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer rounded-full overflow-hidden h-8 w-8"
                >
                  <img src={user.photoURL} alt="profile"></img>
                </li>
              </ul>}
            ) : (
              page !== "/signin" && (
                <li className="cursor-pointer">
                  <Link to="/signin">sign in</Link>
                </li>
              )
            )}
          </ul>
        </nav> */}

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
    </div>
  );
};

export default Nav;
