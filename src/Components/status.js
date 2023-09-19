import React, { useContext, useEffect } from "react";
import FirebaseContext from "../context/Firebase";
import "../Styles/status.css";

const Status = () => {
  const context = useContext(FirebaseContext);
  const { Post, GetPost } = context;

  useEffect(() => {
    GetPost();
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
                    className={`status-light ${item.working ? "green" : "red"}`}
                  ></div>
                </td>
                <td>All OK</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Status;
