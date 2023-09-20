import React from "react";
import { useLocation } from "react-router-dom";

const Problem = () => {
  const location = useLocation();
  const problem = location.state?.problem;

  return (
    <div>
      <h2>{problem && <p>Problem: {problem} is not Working</p>}</h2>
    </div>
  );
};

export default Problem;
