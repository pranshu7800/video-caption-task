import React from 'react';

const VideoInput = ({ url, setUrl }) => {
    const clearUrl = () => {
        setUrl('')
      };
  return (
    <div>
      <h2>Enter Video URL</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button onClick={clearUrl}>Clear URL</button>
    </div>
  );
};

export default VideoInput;
