import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Nisan',
    age: 26,
    message: 'Random Message'
  })

  const changeMessage = () => { 
    setPerson({...person, message: 'Changed Message' })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
