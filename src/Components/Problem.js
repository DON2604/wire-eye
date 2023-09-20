import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/problem.css"

const Problem = () => {
  const location = useLocation();
  const problem = location.state?.problem;

  return (
    <>
    <h2 className="box-heading">Problem Identified 
    </h2>
    <div className="problem-box">     
      <div className="message-box">
        <p className="message">Problem Identified at
        <div className="text">
        <strong>{problem}</strong>
        </div>
        Possible cause can be faulty street light.<br/></p>
      </div>
    </div>
    <div className="ut"></div>
    </>
    );

};

export default Problem;