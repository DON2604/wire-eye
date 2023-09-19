import React from "react";
import "../Styles/home.css";
import light from "../Assets/light.gif";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-container">
      <div className="head">
        <h1>About Our Project</h1>
      </div>
      <div className="topic">
        <Container>
          <Row className="text-and-image">
            <Col className="text-content" xs={12} md={6} xl={7}>
              <p>
                Electricity is the critical need for the progress of livelihood.
                In many Indian cities, the maintenance of street lights has
                become a challenging and inefficient process due to the lack of
                a centralized monitoring system. Identifying faults, such as
                non-functioning lights, current leakage, and cable breakage,
                relies on citizen grievances, leading to delays, increased
                costs, and safety concerns. Linemen spend valuable time manually
                searching for faults, diagnosing issues, and fixing them, which
                can take several days to complete. The absence of precise fault
                location information further complicates the process. To
                overcome these obstacles, we seek an innovative solution that
                provides real-time fault detection, accurate identification of
                fault types, and precise location tracking of faulty street
                lights. This solution aims to empower linemen with efficient
                fault management capabilities, reducing their workload and
                ensuring timely maintenance. Moreover, it should enable the
                local authorities to proactively address faults, enhance service
                quality, and optimize street light maintenance processes in
                their respective cities.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="image-container">
                <img src={light} alt="Logo" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="head">
        <h1>Proposed Solution</h1>
        <div className="tosi">
          <h2>What it Does:</h2>
          <p>
            Our solution uses two Arduino boards to make tasks easier. One
            Arduino, equipped with special sensors, checks things like
            temperature and humidity, while the other Arduino sends this data to
            Firebase, a cloud-based digital storage. With its user-friendly
            interface, you can access and visualize the collected data from
            anywhere, ensuring that you're always in control.
          </p>

          <h2>How it Works:</h2>
          <ol>
            <li>
              <strong>Sensing Arduino:</strong> One Arduino, referred to as the
              "Sensing Arduino," has specialized sensors. It constantly monitors
              its surroundings, measuring factors such as temperature and
              humidity.
            </li>
            <li>
              <strong>Firebase Arduino:</strong> The second Arduino, known as
              the "Firebase Arduino," takes the data collected by the Sensing
              Arduino and securely transmits it to Firebase, a cloud-based
              platform that acts as a digital repository.
            </li>
            <li>
              <strong>Access Anywhere:</strong> Once the data is stored in
              Firebase, it can be accessed from anywhere with an internet
              connection. This allows remote monitoring and control of the
              environment around the Sensing Arduino, no matter where you are.
            </li>
          </ol>

          <h2>Why it's Useful:</h2>
          <p>
            This solution provides a convenient way to keep tabs on various
            conditions without physical presence. It's invaluable for tasks like
            greenhouse management, home security, or weather tracking, ensuring
            that you're always informed and in control, just like having two
            reliable assistants!"The proposed solution brings immense value to
            our project by introducing real-time data collection and remote
            monitoring capabilities. With the integration of two Arduino boards
            and Firebase, we empower our project with the ability to capture
            crucial environmental data such as temperature and humidity, which
            is essential for informed decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
