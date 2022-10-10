import React, { Children } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 text-white">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
