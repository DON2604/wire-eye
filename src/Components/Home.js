import React from "react";
import "../Styles/home.css";
import light from "../Assets/light.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="head">
        <h1>
          <br />
          About Our Project
        </h1>
      </div>
      <div className="topic">
        <div className="topic-content">
          <p>
            Electricity is the critical need for the progress of livelihood. In
            many Indian cities, the maintenance of <br />
            street lights has become a challenging and inefficient process due
            to the lack of a centralized <br /> monitoring system. Identifying
            faults, such as non-functioning lights, current leakage, and cable{" "}
            <br /> breakage, relies on citizen grievances, leading to delays,
            increased costs, and safety concerns. <br /> Linemen spend valuable
            time manually searching for faults, diagnosing issues, and fixing
            them, <br /> which can take several days to complete. The absence of
            precise fault location information further <br /> complicates the
            process. To overcome these obstacles, we seek an innovative solution
            that provides <br /> real-time fault detection, accurate
            identification of fault types, and precise location tracking of
            faulty <br /> street lights. This solution aims to empower linemen
            with efficient fault management capabilities, <br /> reducing their
            workload and ensuring timely maintenance. Moreover, it should enable
            the local <br />
            authorities to proactively address faults, enhance service quality,
            and optimize street light <br /> maintenance processes in their
            respective cities.
          </p>
        </div>
        <div className="image-container">
          <img src={light} alt="Logo" />
        </div>
      </div>
      <div className="head">
        <br/><br/><h1>Proposed Solution</h1>
        <div className="tosi">
        <h2>What it Does:</h2>
      <p>
        Our solution uses two Arduino boards to make tasks easier. One Arduino,
        equipped with special sensors, checks things like temperature and
        humidity, while the other Arduino sends this data to Firebase, a
        cloud-based digital storage.
      </p>

      <br/><h2>How it Works:</h2>
      <ol>
        <li>
          <strong>Sensing Arduino:</strong> One Arduino, referred to as the
          "Sensing Arduino," has specialized sensors. It constantly monitors its
          surroundings, measuring factors such as temperature and humidity.
        </li>
        <li>
          <strong>Firebase Arduino:</strong> The second Arduino, known as the
          "Firebase Arduino," takes the data collected by the Sensing Arduino
          and securely transmits it to Firebase, a cloud-based platform that
          acts as a digital repository.
        </li>
        <li>
          <strong>Access Anywhere:</strong> Once the data is stored in Firebase,
          it can be accessed from anywhere with an internet connection. This
          allows remote monitoring and control of the environment around the
          Sensing Arduino, no matter where you are.
        </li>
      </ol>

      <br/><h2>Why it's Useful:</h2>
      <p>
        This solution provides a convenient way to keep tabs on various
        conditions without physical presence. It's invaluable for tasks like
        greenhouse management, home security, or weather tracking, ensuring that
        you're always informed and in control, just like having two reliable
        assistants!
      </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
