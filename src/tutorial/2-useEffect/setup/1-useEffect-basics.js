import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('aaa');
    if(value > 0) {
      document.title = `New messages(${value})`;
    }
    else
    {
      document.title = `React App`
    }
  }, [])

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
    </>
  );
};

export default UseEffectBasics;
