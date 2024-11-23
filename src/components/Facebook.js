import React, { useEffect } from "react";
import SocialProofTask from "./components/tasks/SocialProofTask"; // Import your custom component

function App() {
  // Initialize Facebook SDK
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1054553945988538", // Replace with your Facebook App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: "v17.0", // Use the latest version of Facebook API
      });
    };

    // Load Facebook SDK
    (function (d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div>
      <header>
        <h1>Welcome to My App</h1>
      </header>
      <main>
        <SocialProofTask
          onComplete={() => {
            alert("Thank you for sharing!");
          }}
        />
      </main>
      <footer>
        <p>© 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
