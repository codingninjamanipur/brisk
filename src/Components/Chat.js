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
import { db } from "../firebase/firebaseConfig";
import { UserContext } from "../contexts/Context";
const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [user] = useContext(UserContext);
  useEffect(() => {
    getMessages();
  }, []);
  // const getMessages = async () => {
  //   const messagesSnapshot = await getDocs(collection(db, "messages"));
  //   messagesSnapshot.docs.map((doc) => setChatData((p) => [...p, doc.data()]));
  //   // setChatData((p) => [...p, notesList]);
  //   return;
  // };

  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const messages = [];
  //   querySnapshot.forEach((doc) => {
  //     messages.push(doc.data());
  //   });
  //   // console.log("Current cities in CA: ", cities.join(", "));
  //   console.log(messages);
  // });
  const getMessages = () => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        console.log("city", doc.data());
        messages.push(doc.data());
      });
      setChatData(messages);
      // console.log("Current cities in CA: ", cities.join(", "));
    });
  };

  // getNotes();
  // const getMessages = async () => {
  //   const querySnapshot = await getDocs(collection(db, "messages"));
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     // console.log(doc.id, " => ", doc.data());
  //     setChatData((p) => [...p, doc.data()]);
  //   });

  //   // setChatData(querySnapshot);
  // };

  return (
    <div className="">
      <header className="w-1/2 absolute top-0 flex justify-center items-center bg-gray-500">
        <h2 className="z-10">Group Chat 1</h2>
      </header>
      {/* <div className="h-4"></div> */}
      <div className="flex flex-col h-screen">
        <div className="h-5/6 p-4 w-full bg-gray-300 overflow-y-scroll">
          {chatData.map((data) => (
            <motion.div
              animate={{ translateY: [10, 0], opacity: [0, 1] }}
              transition={{ duration: 0.1 }}
            >
              <Chatbox
                key={data.id}
                msg={data.msg}
                user={data.user}
                img={data.userImg}
                type={data.user === user.displayName ? "user" : "other"}
              ></Chatbox>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center bg-slate-500">
          <ChatInput chatData={chatData} setChatData={setChatData} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
