import React, { useState } from 'react';
import StatusGif from '../assets/lbC3Oa.webp';
import '../App.css' ; // Import your CSS file for status styling

export default function Status() {
  const [lightStatus, setLightStatus] = useState(true);
  const [wireStatus, setWireStatus] = useState(true);
  const [wireLeakage, setWireLeakage] = useState(false);

  const renderStatus = (status, okText, problemText) => {
    return status ? (
      <span className="status-ok">{okText}</span>
    ) : (
      <span className="status-problem">{problemText}</span>
    );
  };

  return (
    <div className="status-container">
      {/* Display a GIF (replace with your actual GIF) */}
      <img
        src={StatusGif}
        alt="Status GIF"
        className="status-gif"
      />

      <div className="status-details">
        {/* Light Status */}
        <div className="status-item">
          <span className="status-label">Light Status:</span>
          {renderStatus(lightStatus, 'All OK', 'Light Issue')}
        </div>

        {/* Wire Status */}
        <div className="status-item">
          <span className="status-label">Wire Status:</span>
          {renderStatus(wireStatus, 'All OK', 'Wire Issue')}
        </div>

        {/* Wire Leakage */}
        <div className="status-item">
          <span className="status-label"> Wire Leakage :</span>
          {renderStatus(!wireLeakage, 'No Leakage', 'Leak Detected')}
        </div>
      </div>
    </div>
  );
}
