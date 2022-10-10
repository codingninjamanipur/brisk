import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Chat from "./Components/Chat";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Signin from "./Components/Signin";
import Nav from "./Components/Nav";

import {
  NavBurgerContext,
  PageContext,
  SignedInContext,
  UserContext,
} from "./contexts/Context";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import Profile from "./Components/Profile";
import ChatApp from "./Components/ChatApp";
import { NavBurger } from "./Components/navburger/NavBurger";
import { useCycle } from "framer-motion";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const { user, setUser } = useState({});
  const [page, setPage] = useState("");
  const [navBurgerState, toggleNavBurgerState] = useCycle(true, false);

  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
        <SignedInContext.Provider value={[signedIn, setSignedIn]}>
          <PageContext.Provider value={[page, setPage]}>
            <NavBurgerContext.Provider
              value={[navBurgerState, toggleNavBurgerState]}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="h-screen ">
                      <Layout>
                        <Hero />
                      </Layout>
                    </div>
                  }
                />
                <Route
                  path="/signin"
                  element={
                    <Layout>
                      <Signin />
                    </Layout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Layout>
                      <Profile />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Layout>
                      <Contact />
                    </Layout>
                  }
                />

                <Route path="/chatapp" element={<ChatApp />} />
              </Routes>
            </NavBurgerContext.Provider>
          </PageContext.Provider>
        </SignedInContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
