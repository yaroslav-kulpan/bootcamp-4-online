import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center py-5 px-5">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
