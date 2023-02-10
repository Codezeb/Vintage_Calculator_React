import React, { useState, useEffect } from 'react';

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Málaga: {time}</h1>
      {/* <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        Refresh
      </button> */}
    </div>
  );
}

export default Time;