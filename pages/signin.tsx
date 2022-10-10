import React, { useEffect, useState } from "react";
import {auth,provider} from "../firebase/firebase.utils"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  inMemoryPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import GoogleLogo from "../public/google.png"
import { useContext } from "react";
import {UserContext, UserProvider} from "../contexts/UserContext"
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../lib/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
//comment

const Signin:React.FC = () => {
  return (
  <UserProvider>
    <Layout>
        <SigninChild/> 
    </Layout>
    </UserProvider>


  );
};

//SigninChild is extracted as a component so that UserProvider can be wrapped around it
const SigninChild = () =>{
  const {user,loading,error} = useContext(UserContext);
  // const [signedIn, setSignedIn] = useContext(SignedInContext);

  const router = useRouter();

  const signInHandler = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // // The signed-in user info.
        // const userData = result.user;

        router.push("/chatapp");

      })
      .catch((error) => {
        console.log(error)
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
return <>
<div className="py-24 px-4 mx-auto flex flex-col gap-4 justify-center items-center rounded">
  <h1 className="font-semibold text-xl">Sign in</h1>
  <button
    className="bg-gray-300 p-2 flex items-center gap-2 rounded text-gray-700"
    onClick={signInHandler}
  >
    sign in with <Image src={GoogleLogo} alt="Google" width={"16px"} height={"16px"} />
  </button>
  <div className="h-36"></div>
</div>
</>
}


export default Signin;

