// src/components/tasks/SocialProofTask.js
/* global FB */
import React from "react";

function SocialProofTask({ onComplete }) {
  const handleShare = () => {
    if (typeof FB !== "undefined") {
      // Check if user is logged in to Facebook
      FB.getLoginStatus(function (response) {
        if (response.status === "connected") {
          // User is logged in, show the share dialog
          showShareDialog();
        } else {
          // Prompt the user to log in to Facebook
          FB.login(function (loginResponse) {
            if (loginResponse.authResponse) {
              // Logged in, now show the share dialog
              showShareDialog();
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
          });
        }
      });
    } else {
      alert("Facebook SDK not loaded.");
    }
  };

  const showShareDialog = () => {
    FB.ui(
      {
        method: "share",
        href: "https://www.indiahenna.com/",
        quote: "I loved this product for my hair, and you can try it too!",
        hashtag: "#HeenaProduct",
      },
      function (response) {
        if (response && !response.error_message) {
          console.log("Posting completed.");
          onComplete();
        } else {
          console.log("Error while posting.");
        }
      }
    );
  };

  return (
    <div>
      <p>Please share our campaign on Facebook to earn your cashback.</p>
      <button onClick={handleShare}>Share on Facebook</button>
    </div>
  );
}

export default SocialProofTask;
