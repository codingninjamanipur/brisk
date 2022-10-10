import { NextPage } from "next";
import React from "react";
import Layout from "../lib/Layout";

const About:NextPage = () => {
  return (
    <Layout>
    <div className="max-w-5xl w-full mx-auto p-8">
      <h1 className="font-bold text-4xl">About</h1>
      <div className="h-96"></div>
    </div>
    </Layout>
  );
};

export default About;
