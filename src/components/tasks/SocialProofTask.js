// src/components/tasks/SocialProofTask.js

import React from 'react';

function SocialProofTask({ onComplete }) {
  const handleShare = () => {
    console.log('Mock: User shared on social media');
    // Simulate successful sharing
    onComplete();
  };

  return (
    <div>
      <p>Please share our campaign on your social media.</p>
      <button onClick={handleShare}>Share Now</button>
    </div>
  );
}

export default SocialProofTask;
