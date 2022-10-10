import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HeroImg from "../assets/herodark.png";
import { motion } from "framer-motion";
import { NavBurger } from "./navburger/NavBurger";
import FadeUp from "./Transitions/FadeUp";
import { SignedInContext } from "../contexts/Context";
const Hero = () => {
  const [signedIn] = useContext(SignedInContext);
  const navigate = useNavigate();
  const routeSignIn = () => {
    navigate("/signin");
  };
  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:py-32 flex flex-col-reverse md:flex-row-reverse md:items-center gap-8  ">
      <div className="md:w-2/3">
        <h1 className="font-bold text-5xl mb-4 ">
          <div className="flex gap-4 flex-wrap">
            <FadeUp delay="0" className="text-blue-700">
              Brisk
            </FadeUp>
            <FadeUp delay="0.1">
              {" "}
              <span className="flex gap-4 flex-wrap">
                <span>your</span>
                <span>messages</span>
              </span>
            </FadeUp>
          </div>
        </h1>
        <FadeUp delay="0.2" className="mb-4">
          Texting made easy, Hassle Free Account creation on the go
        </FadeUp>
        {signedIn ? (
          <FadeUp delay="0.3">
            <button
              onClick={() => navigate("/chatapp")}
              className="px-4 py-2 bg-blue-700 text-white "
            >
              Get Started
            </button>
          </FadeUp>
        ) : (
          <FadeUp delay="0.3">
            <button
              onClick={routeSignIn}
              className="px-4 py-2 bg-blue-700 text-white "
            >
              Get Started
            </button>
          </FadeUp>
        )}
      </div>
      <div className="md:w-1/3">
        <img src={HeroImg} alt="hero"></img>
      </div>
    </div>
  );
};

export default Hero;
