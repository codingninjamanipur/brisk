import { User } from "firebase/auth";
import { createContext, ReactNode, useState } from "react";
import { auth } from "../firebase/firebase.utils";
import { useAuthState } from 'react-firebase-hooks/auth'

export interface IUserContext {
    user:User | null | undefined,
    loading: boolean,
    error:any
}
export const UserContext = createContext<IUserContext >({} as IUserContext)

export const UserProvider:React.FC<{children: ReactNode}> = ({children}) =>{
    const [user, loading, error] = useAuthState(auth)
    return (
      <UserContext.Provider
        value={{
          user: user,
          loading:loading,
          error:error
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };
