import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/Context";

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <section className="max-w-5xl w-full mx-auto p-8 flex flex-col gap-4">
      <div className=" flex gap-4 items-center">
        <div className="">
          <img
            className="border-2 border-black"
            src={user.photoURL}
            alt="profilepic"
          />
        </div>
        <div>
          <div className="flex gap-2">
            <div className="font-semibold">Username: </div>
            <div> {user.displayName}</div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">Email: </div>
            <div> {user.email}</div>
          </div>
          <div className="flex gap-2">
            <div className="font-semibold">User ID: </div>
            <div> {user.uid}</div>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-gray-700 underline underline-offset-8 cursor-pointer"
          onClick={() => navigate("/signin")}
        >
          Sign in from another account
        </h2>
      </div>
      <div className="h-96"></div>
    </section>
  );
};

export default Profile;
