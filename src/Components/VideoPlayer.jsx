import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ url, captions }) => {
  const videoRef = useRef(null);
  const [currentCaption, setCurrentCaption] = useState('');

  useEffect(() => {
    const handleTimeUpdate = () => {
      const currentTime = videoRef.current.currentTime;
      const activeCaption = captions.find(
        (caption) => Math.floor(currentTime) === parseInt(caption.timestamp)
      );
      if (activeCaption) {
        setCurrentCaption(activeCaption.text);
      } else {
        setCurrentCaption('');
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [captions]);

  return (
    <div>
      <h2>Video Player</h2>
      <video ref={videoRef} controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="caption">{currentCaption}</div>
    </div>
  );
};

export default VideoPlayer;
