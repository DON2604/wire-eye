import React, { useState } from 'react';

export default function Status() {
  // Simulate status data (you can replace this with real data)
  const [lightStatus, setLightStatus] = useState(true);
  const [wireStatus, setWireStatus] = useState(true);
  const [wireLeakage, setWireLeakage] = useState(false);

  // Function to render status text or numbers
  const renderStatus = (status, okText, problemText) => {
    return status ? <span>All OK</span> : <span>{problemText}</span>;
  };

  return (
    <div>
      {/* Display a GIF (replace with your actual GIF) */}
      <img
        src="your_gif_url_here.gif"
        alt="Status GIF"
        style={{ width: '100%', maxWidth: '400px' }}
      />

      {/* Light Status */}
      <div>
        Light Status: {renderStatus(lightStatus, 'All OK', '1')}
      </div>

      {/* Wire Status */}
      <div>
        Wire Status: {renderStatus(wireStatus, 'All OK', '2')}
      </div>

      {/* Wire Leakage */}
      <div>
        Wire Leakage: {renderStatus(!wireLeakage, 'All OK', 'Not OK')}
      </div>
    </div>
  );
}
