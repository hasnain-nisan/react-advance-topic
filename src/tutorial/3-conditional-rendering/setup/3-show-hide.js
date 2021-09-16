import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>
    <button className="btn" onClick={() => setShow(!show)}>Toggle</button>
    {show && <Item />}
  </>;
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  })

  return(
    <div style={{ marginTop: '2rem' }}>
      <h3>Window Size:</h3>
      <h6>{size}</h6>
    </div>
  )
}

export default ShowHide;
