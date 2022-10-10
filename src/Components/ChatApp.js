import React from "react";
import Chat from "./Chat";
import RightBar from "./RightBar";
import SideBar from "./SideBar";

const ChatApp = () => {
  return (
    <div>
      <div className="flex bg-gray-100">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-2/4">
          <Chat />
        </div>
        <div className="w-1/4">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
