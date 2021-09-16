import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || "Hasnain Nisan"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>There is an error</p> : <h1>No error</h1>}
    </>
  );
};

export default ShortCircuit;
