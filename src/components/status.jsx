import React, { useState } from 'react';
import StatusGif from '../assets/neon-circle.gif';

export default function Status() {
  
  const [lightStatus, setLightStatus] = useState(true);
  const [wireStatus, setWireStatus] = useState(true);
  const [wireLeakage, setWireLeakage] = useState(false);

  
  const renderStatus = (status, okText, problemText) => {
    return status ? <span>All OK</span> : <span>{problemText}</span>;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Display a GIF (replace with your actual GIF) */}
        <img
          src={StatusGif}
          alt="Status GIF"
          style={{ maxWidth: '200px', marginRight: '20px' }} // Adjust the max width and margin as needed
        />

        <div>
          {/* Light Status */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', fontSize: '20px' }}>Light Status:</span>
            {renderStatus(lightStatus, 'All OK', '1')}
          </div>

          {/* Wire Status */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', fontSize: '20px' }}>Wire Status:</span>
            {renderStatus(wireStatus, 'All OK', '2')}
          </div>

          {/* Wire Leakage */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '10px', fontSize: '20px' }}>Wire Leakage:</span>
            {renderStatus(!wireLeakage, 'All OK', 'Not OK')}
          </div>
        </div>
      </div>
    </div>
  );
}
