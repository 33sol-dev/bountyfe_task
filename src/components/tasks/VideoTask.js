// src/components/tasks/VideoTask.js

import React, { useRef, useEffect } from 'react';

function VideoTask({ videoUrl, onComplete }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      // Video has finished playing
      onComplete();
    };
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, [onComplete]);

  return (
    <div>
      <video ref={videoRef} controls width="100%">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default VideoTask;
