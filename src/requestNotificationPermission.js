// src/requestNotificationPermission.js

import { messaging } from './firebase';
import { getToken } from 'firebase/messaging';

// export const requestNotificationPermission = async () => {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       const token = await getToken(messaging, {
//         vapidKey: 'YOUR_PUBLIC_VAPID_KEY', // Replace with your public VAPID key
//       });
//       // Send this token to your backend to save it
//       const authToken = localStorage.getItem('token');
//       await fetch('/api/save-fcm-token', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${authToken}`,
//         },
//         body: JSON.stringify({ fcmToken: token }),
//       });
//       console.log('FCM Token:', token);
//     } else {
//       console.log('Notification permission denied');
//     }
//   } catch (error) {
//     console.error('Error getting permission for notifications', error);
//   }
// };
// Instead of requesting permission, simply log and proceed
export const requestNotificationPermission = async () => {
  console.log('Mock: Requesting notification permission');
  // Simulate getting an FCM token
  const mockFcmToken = 'mock-fcm-token';
  // Store or handle the mock token as needed
  console.log('Mock: FCM Token', mockFcmToken);
  // No need to send to backend since we're mocking
};
