import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import GoogleLogo from "../assets/google.png";
import { useContext } from "react";
import { SignedInContext, UserContext } from "../contexts/Context";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useContext(UserContext);
  const [signedIn, setSignedIn] = useContext(SignedInContext);

  const navigate = useNavigate();

  const signInHandler = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const userData = result.user;
        if (userData) {
          setUser(userData);
          setSignedIn(true);
          navigate("/chatapp");
        }
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="py-24 px-4 mx-auto flex flex-col gap-4 justify-center items-center rounded">
      <h1 className="font-semibold text-xl">Sign in</h1>
      <button
        className="bg-gray-300 p-2 flex items-center gap-2 rounded text-gray-700"
        onClick={signInHandler}
      >
        sign in with <img src={GoogleLogo} alt="Google" width={"16px"} />
      </button>
      <div className="h-36"></div>
    </div>
  );
};

export default Signin;
