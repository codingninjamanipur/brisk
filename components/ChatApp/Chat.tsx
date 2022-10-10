import React, { useContext, useEffect, useState } from "react";
import Chatbox from "./Chatbox";
import ChatInput from "./ChatInput";
import { motion } from "framer-motion";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";
import { UserContext } from "../../contexts/UserContext";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const {user} = useContext(UserContext);



  const q = query(collection(db, "messages"), orderBy("createdAt"));
  const [messages, loading, error] = useCollectionData(q);

  useEffect(()=>{
    if(messages){
      console.log(messages)
    }
  },[messages])

  return (
    <div className="">
      <header className="w-1/2 absolute top-0 flex justify-center items-center bg-gray-500">

      </header>
      {/* <div className="h-4"></div> */}
      <div className="flex flex-col h-screen">
        <div className="h-5/6 p-4 w-full bg-gray-300 overflow-y-scroll">
          {messages?.map((doc,idx) => (
            <motion.div
              key={doc.id}
              animate={{ translateY: [10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.1 }}
            >

              <Chatbox
                msg={doc.msg}
                user={doc.user}
                img={doc.userImg}
                type={doc.user === user?.displayName ? "user" : "other"}
              ></Chatbox>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center bg-slate-500">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default Chat;
