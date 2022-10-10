import React, { useContext } from "react";
import { useRouter } from "next/router";
import HeroImg from "../public/herodark.png";
import { motion } from "framer-motion";

import FadeUp from "./Transitions/FadeUp";
import Image from "next/image";
import { UserContext } from "../contexts/UserContext";
const Hero = () => {
  const {user}= useContext(UserContext);
  const router = useRouter();
  const routeSignIn = () => {
    router.push("/signin");
  };
  return (
    <div className="w-full max-w-5xl mx-auto p-8 md:py-32 flex flex-col-reverse md:flex-row-reverse md:items-center gap-8  ">
      <div className="md:w-2/3">
        <h1 className="font-bold text-5xl mb-4 ">
          <div className="flex gap-4 flex-wrap">
            <FadeUp delay={0} className="text-blue-700">
              Brisk
            </FadeUp>
            <FadeUp delay={0.1} className="">
                      <span className="flex gap-4 flex-wrap">
                <span>your</span>
                <span>messages</span>
              </span>
            </FadeUp>
          </div>
        </h1>
        <FadeUp delay={0.2} className="mb-4" >
          Texting made easy, Hassle Free Account creation on the go
        </FadeUp>
        {user ? (
          <FadeUp delay={0.3}  className="">
            <button
              onClick={() => router.push("/chatapp")}
              className="px-4 py-2 bg-blue-700 text-white "
            >
              Get Started
            </button>
          </FadeUp>
        ) : (
          <FadeUp delay={0.3}  className="">
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
        <Image src={HeroImg} alt="hero" layout="responsive"></Image>
      </div>
    </div>
  );
};

export default Hero;
