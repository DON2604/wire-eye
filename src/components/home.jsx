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
        <h2>Welcome to the LDR Monitoring Website</h2>
        <Status />

        <div className="button-container">
          <button
            className={`toggle-button ${showRecentAlerts ? 'active' : ''}`}
            onClick={() => setShowRecentAlerts(!showRecentAlerts)}
          >
            {showRecentAlerts ? 'Hide Recent Alerts' : 'Show Recent Alerts'}
          </button>

          {showRecentAlerts && (
            <div>
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

          <button
            className={`toggle-button ${showOurPurpose ? 'active' : ''}`}
            onClick={() => setShowOurPurpose(!showOurPurpose)}
          >
            {showOurPurpose ? 'Hide Our Purpose' : 'Show Our Purpose'}
          </button>

          {/* Button for showing/hiding the review section */}
          <button
            className={`toggle-button ${showReviews ? 'active' : ''}`}
            onClick={() => setShowReviews(!showReviews)}
          >
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </button>

          {/* Button for showing/hiding the user guide section */}
          <button
            className={`toggle-button ${showUserGuide ? 'active' : ''}`}
            onClick={() => setShowUserGuide(!showUserGuide)}
          >
            {showUserGuide ? 'Hide User Guide' : 'Show User Guide'}
          </button>
        </div>

        {showOurPurpose && (
          <div className="our-purpose">
            <h2>Our Purpose</h2>
            <p>
              Welcome to our website Wire-Eye. Here we aim to provide
              you with a reliable LDR monitoring system that can make your
              job much easier. We offer a smart monitoring
              system that alerts you during wire breakage or light malfunctions.
              In addition, we provide a status message that updates you on the condition
              of the wire and lights.
            </p>
          </div>
        )}

        {/* Review Section */}
        {showReviews && (
          <div className="review-section">
            <h3>Submit a Review</h3>
            <div className="review-form">
              <input
                type="text"
                placeholder="Problem"
                value={reviewInput.problem}
                onChange={(e) => setReviewInput({ ...reviewInput, problem: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                value={reviewInput.email}
                onChange={(e) => setReviewInput({ ...reviewInput, email: e.target.value })}
              />
              <button onClick={handleSubmitReview}>Submit</button>
            </div>
          </div>
        )}

        {/* Display Submitted Reviews */}
        {showReviews && submittedReviews.length > 0 && (
          <div className="submitted-reviews">
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
        )}

        {/* User Guide Section */}
        {showUserGuide && (
          <div className="user-guide">
            <h3>User Guide</h3>
            <p>
              Here is a user guide section that provides instructions and guidance
              on how to use our LDR monitoring system effectively.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
