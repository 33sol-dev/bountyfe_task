// src/components/tasks/SocialProofTask.js
/* global FB */
import React from 'react';

function SocialProofTask({ onComplete }) {
  const handleShare = () => {
    if (typeof FB !== 'undefined') {
      FB.ui(
        {
          method: 'share',
          href: 'https://www.indiahenna.com/',
          quote: 'I loved this product for my hair, and you can try it too!',
          hashtag: '#HeenaProduct',
        },
        function(response) {
          if (response && !response.error_message) {
            console.log('Posting completed.');
            onComplete();
          } else {
            console.log('Error while posting.');
          }
        }
      );
    } else {
      alert('Facebook SDK not loaded.');
    }
  };

  return (
    <div>
      <p>Please share our campaign on Facebook to earn your cashback.</p>
      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
}

export default SocialProofTask;
