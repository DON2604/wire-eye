import React, { useContext, useEffect } from "react";
import FirebaseContext from "../context/Firebase";
import "../Styles/status.css";

const Status = () => {
  const context = useContext(FirebaseContext);
  const { Post, GetPost } = context;
  const lightsStatus = [
    { post: "POST 1", working: true },
    { post: "POST 2", working: true },
    { post: "POST 3", working: true },
    { post: "POST 4", working: false },
    { post: "POST 5", working: true },
    { post: "POST 6", working: true },
    { post: "POST 7", working: false },
    { post: "POST 8", working: true },
  ];

    // Define the postIds array
    const postIds = lightsStatus.map((item) => item.post);

    useEffect(() => {
      GetPost();
    }, [])
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
