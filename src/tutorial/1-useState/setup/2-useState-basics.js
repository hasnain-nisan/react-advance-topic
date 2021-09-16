import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('My Random Title!!!')
  
  const clickHandler = () => {
    if(text === "My Random Title!!!")
    {
      setText("Changed Title!!!");
    }
    else
    {
      setText("My Random Title!!!");
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
