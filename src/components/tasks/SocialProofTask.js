/* global FB */
import React, { useEffect } from 'react';

const FacebookShare = () => {
  useEffect(() => {
    // Load Facebook SDK when the component mounts
    (function (d, s, id) {
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      const fjs = d.getElementsByTagName(s)[0];
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    // Initialize the Facebook SDK
    window.fbAsyncInit = function () {
      FB.init({
        appId: '1054553945988538', // Replace with your Facebook App ID
        xfbml: true,
        version: 'v21.0', // Replace with your API version, e.g., v17.0
      });
    };
  }, []);

  const handleLoginAndShare = () => {
    if (typeof FB === 'undefined') {
      alert('Facebook SDK not loaded.');
      return;
    }

    // Check the user's login status
    FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        // User is logged in, proceed to share
        shareOnFacebook();
      } else {
        // User is not logged in, initiate login
        FB.login(function (loginResponse) {
          if (loginResponse.authResponse) {
            // Login successful, proceed to share
            shareOnFacebook();
          } else {
            alert('Login cancelled or not authorized.');
          }
        }, { scope: 'email' }); // Request necessary permissions
      }
    });
  };

  const shareOnFacebook = () => {
    FB.ui(
      {
        method: 'share',
        href: 'https://www.indiahenna.com/', // URL to share
        quote: 'I loved this product for my hair, and you can try it too!',
        hashtag: '#HeenaProduct',
      },
      function (response) {
        if (response && !response.error_message) {
          alert('Post was successfully shared!');
        } else {
          alert('Error while sharing.');
        }
      }
    );
  };

  return (
    <div>
      <p>Please share our campaign on Facebook to earn your cashback.</p>
      <button onClick={handleLoginAndShare}>Share on Facebook</button>
    </div>
  );
};

export default FacebookShare;
