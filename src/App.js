import React, { useState } from 'react';
import VideoInput from './Components/VideoInput';
import CaptionInput from './Components/CaptionInput';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';

const App = () => {
  // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  const [url, setUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  return (
    <div className="App">
      <h1>Video Caption App</h1>
      <VideoInput url={url} setUrl={setUrl} />
      <CaptionInput captions={captions} setCaptions={setCaptions} />
      {url && <VideoPlayer url={url} captions={captions} />}
    </div>
  );
};

export default App;
