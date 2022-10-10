import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/Context";
const Chatbox = ({ msg, user, img, type }) => {
  // const [user] = useContext(UserContext);
  const chatBoxAlignStyleUser =
    "bg-gray-200 flex gap-2  mb-2 p-2 flex-row-reverse";
  const chatBoxAlignStyleOther = "bg-gray-400 flex gap-2  mb-2 p-2";
  return (
    <span
      className={`${
        type === "user" ? chatBoxAlignStyleUser : chatBoxAlignStyleOther
      }`}
    >
      <div className="h-8 w-8 rounded-full overflow-hidden">
        <img src={img} alt="dp"></img>
      </div>
      <div>
        <h2 className="font-normal text-sm ">{user}</h2>
        <p className="font-light text-xs">{msg}</p>
      </div>
    </span>
  );
};

export default Chatbox;
