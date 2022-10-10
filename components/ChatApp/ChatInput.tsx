import React, { useContext, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils"
import { UserContext } from "../../contexts/UserContext";


const ChatInput:React.FC = () => {
  const [msg, setMsg] = useState("");
  const {user} = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (msg === "") return;
    // setChatData((p) => [...p, msg]);
    setMsg("");
    // Add a new document with a generated id.
    createMsg();
  };
  const createMsg = async () => {
    await addDoc(collection(db, "messages"), {
      user: user?.displayName,
      msg: msg,
      uid: user?.uid,
      userImg: user?.photoURL,
      createdAt: new Date(),
    });
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(event.target?.value );
  };
  return (
    <form onSubmit={submitHandler} className="flex  gap-2 w-full  py-9 px-4">
      <input
        value={msg}
        onChange={changeHandler}
        className="bg-slate-200 px-4 py-2 flex  w-full rounded-xl"
      ></input>
      <button type="submit" className="bg-gray-100 px-4 py-2 rounded-xl">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
