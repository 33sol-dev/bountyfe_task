// src/components/tasks/LocationTask.js

import React, { useEffect } from 'react';

function LocationTask({ onComplete }) {
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock sending location data to backend
          console.log('Mock: Sending location data', position.coords);
          // Simulate successful verification
          onComplete();
        },
        (error) => {
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }, [onComplete]);

  return <p>Verifying your location...</p>;
}

export default LocationTask;
