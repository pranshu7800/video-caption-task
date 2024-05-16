import React, { useState } from 'react';

const CaptionInput = ({ captions, setCaptions }) => {
  const [text, setText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const addCaption = () => {
    setCaptions([...captions, { text, timestamp }]);
    setText('');
    setTimestamp('');
  };

  return (
    <div>
      <h2>Enter Captions</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Caption text"
      />
      <input
        type="text"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        placeholder="Timestamp (in seconds)"
      />
      <button onClick={addCaption}>Add Caption</button>
      <ul>
        {captions.map((caption, index) => (
          <li key={index}>
            {caption.timestamp}s: {caption.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaptionInput;
