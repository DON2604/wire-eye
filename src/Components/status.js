import React, { useContext, useEffect } from "react";
import FirebaseContext from "../context/Firebase";
import "../Styles/status.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Status = () => {
  const context = useContext(FirebaseContext);
  const { Post, GetPost } = context;
  let navigate = useNavigate();

  const handleClick = (problem) => {
    navigate('/Problem', { state: { problem } })
  }

  useEffect(() => {
    GetPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keysArray = Object.keys(Post);
  const valuesArray = Object.values(Post);

  const lightsStatus = keysArray.map((key, index) => ({
    post: key,
    working: valuesArray[index] % 2 === 0,
  }));

  console.log("lightsStatus", lightsStatus);

  return (
    <>
      <div className="home-container">
        <br />
        <h1 className="sthead">Status Report</h1>
      </div>
      <div className="status-table">
        <table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Status</th>
              <th>Problem</th>
            </tr>
          </thead>
          <tbody>
            {lightsStatus.map((item, index) => (
              <tr key={index}>
                <td>{item.post}</td>
                <td>
                  <div
                    className={`status-light ${item.working ? "red" : "green"}`}
                  ></div>
                </td>
                <td>{!item.working? <Button variant="success">All OK</Button> : <Button variant="danger" onClick={() => handleClick(item.post)}>View Problem</Button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Status;
