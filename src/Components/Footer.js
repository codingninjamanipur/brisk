import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logoGray.png";
const Footer = () => {
  const navigate = useNavigate();
  const data = [1, 2, 3, 4, 5];
  return (
    <footer className="w-full bg-gray-300 ">
      <div className="max-w-5xl mx-auto p-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" width={"32px"} />
            <span className="font-bold text-xl text-gray-900">brisk.</span>
          </span>
          <span className="text-sm text-gray-900">brisk your messages</span>
        </div>
        <div className="h-0.5 bg-gray-400"></div>
        <div className="text-sm text-gray-900">© 2022 Brisk.co </div>
      </div>
    </footer>
  );
};

export default Footer;
