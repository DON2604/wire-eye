import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Status from './Status';
import '../App.css';

function Home() {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showRecentAlerts, setShowRecentAlerts] = useState(false);
  const [showOurPurpose, setShowOurPurpose] = useState(false);
  const [showReviews, setShowReviews] = useState(false); // State for showing/hiding reviews
  const [showUserGuide, setShowUserGuide] = useState(false); // State for showing/hiding user guide
  const [reviewInput, setReviewInput] = useState({ problem: '', email: '' });
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const serverEndpoint = 'https://your-server-api-url.com/alerts'; // Replace with your server endpoint

  useEffect(() => {
    axios
      .get(serverEndpoint)
      .then((response) => {
        setAlerts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching alerts:', error);
        setIsLoading(false);
      });
  }, []);

  const handleSubmitReview = () => {
    const newReview = { ...reviewInput };
    setSubmittedReviews([...submittedReviews, newReview]);
    setReviewInput({ problem: '', email: '' });
  };

  return (
    <div className="home">
      <div className="gradient-background">
        <h2 className="animated-text">Welcome to the Wire-Eye Monitoring Website</h2>
        <div className="section-space"></div>
        <Status />

        <div className="section-space"></div>

        <div className="button-container">
          <button
            className={`toggle-button ${showRecentAlerts ? 'active' : ''}`}
            onClick={() => setShowRecentAlerts(!showRecentAlerts)}
          >
            {showRecentAlerts ? 'Hide Recent Alerts' : 'Show Recent Alerts'}
          </button>

          {showRecentAlerts && (
            <div className="animated-slide-up">
              <h3>Recent Alerts</h3>
              <ul>
                {alerts.map((alert) => (
                  <li key={alert.id}>
                    <strong>{alert.title}</strong>
                    <p>{alert.description}</p>
                    <p>Timestamp: {alert.timestamp}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* User Guide Section */}

          {showUserGuide && (
           <div className="user-guide animated-fade-in">
            <h3>User Guide</h3>
            <p>
              Here is a user guide that guides you through our website.
            </p>
            
          </div>
          )}


          {/* Button for showing/hiding the user guide section */}
          <button
            className={`toggle-button ${showUserGuide ? 'active' : ''}`}
            onClick={() => setShowUserGuide(!showUserGuide)}
          >
            {showUserGuide ? 'Hide User Guide' : 'Show User Guide'}
          </button>
        </div>

        <div className="section-space"></div>

        {/* Our Purpose Section */}
        <div className="our-purpose animated-fade-in">
            <h2 className="section-title">Our Purpose</h2>
            <div className="purpose-content">
                <p>
                    At Wire-Eye, our purpose is to empower you with cutting-edge solutions for light-dependent resistor (LDR) monitoring. We are committed to making your job easier by offering a smart monitoring system that ensures the safety and reliability of your lighting infrastructure.
                </p>
                <p>
                     Our mission is to provide you with real-time insights and alerts, helping you detect wire breakages and light malfunctions promptly. We understand the importance of maintaining a well-lit environment for safety and security, and our technology is designed to assist you in achieving just that.
                </p>

                <h3>
                    With Wire-Eye, you can count on :
                </h3>
                <ul>
                    <li>Accurate and Timely Alerts: Our system delivers precise alerts, enabling you to take immediate action and prevent potential hazards.</li>
                    <br/>
                    <li>24/7 Support       : We're here for you around the clock, ready to assist with any issues or questions you may have. We also value your feedback, which you can share with us in our review section.</li>
                    <br/>
                    <li>Robust Security    : Rest assured that your data is fully protected and secure on our platform. We prioritize data integrity and confidentiality to maintain your trust.</li>
                </ul>
            </div>
        </div>

          <div className="section-space"></div>
        
        
        {/* Review Section */}
        
          <div className="review-section animated-fade-in">
            <h3>Submit a Review</h3>
            <div className="review-form">
              <input
                type="text"
                placeholder="Describe the problem"
                value={reviewInput.problem}
                onChange={(e) => setReviewInput({ ...reviewInput, problem: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={reviewInput.email}
                onChange={(e) => setReviewInput({ ...reviewInput, email: e.target.value })}
              />
              <button onClick={handleSubmitReview}>Submit</button>
            </div>
          </div>
        

        {/* Display Submitted Reviews */}
        
          <div className="submitted-reviews animated-fade-in">
            <h3>Submitted Reviews</h3>
            <ul>
              {submittedReviews.map((review, index) => (
                <li key={index}>
                  <p><strong>Problem:</strong> {review.problem}</p>
                  <p><strong>Email:</strong> {review.email}</p>
                </li>
              ))}
            </ul>
          </div>
        
        
      </div>
    </div>
  );
}

export default Home;
