import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default CommonLayout;
