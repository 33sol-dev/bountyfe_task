// src/components/Login.js

/* global FB */
import React, { useState } from 'react';
import { requestNotificationPermission } from '../requestNotificationPermission';


function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  
  const handleFacebookLogin = () => {
    FB.login(
      (response) => {
        if (response.authResponse) {
          // User logged in successfully
          console.log('Logged in:', response);
          // Redirect or proceed with authenticated user
          window.location.href = '/';
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      { scope: 'public_profile,email' }
    );
  };

  const handleSendOtp = async () => {
    // Call backend API to send OTP
    await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobileNumber }),
    });
    setOtpSent(true);
  };
  const handleVerifyOtp = () => {
    // Mock OTP verification
    console.log(`Mock: Verifying OTP ${otp} for ${mobileNumber}`);
    // Simulate successful verification
    const mockToken = 'mock-jwt-token';
    // Store JWT token securely
    localStorage.setItem('token', mockToken);
    // Redirect to home page
    window.location.href = '/';
  };

  // const handleVerifyOtp = async () => {
    
  //   const response = await fetch('/api/verify-otp', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ mobileNumber, otp }),
  //   });
  //   const data = await response.json();
  //   if (data.success) {
  //       // Store JWT token securely
  //       localStorage.setItem('token', data.token);
  //       // Request notification permission
  //       requestNotificationPermission();
  //       // Redirect to home page
  //       window.location.href = '/';
  //     }else {
  //     alert('Invalid OTP');
  //   }
  // };

  return (
    <div>
      <h2>Login</h2>
      {!otpSent ? (
        <div>
          <input
            type="text"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
      )}
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default Login;
