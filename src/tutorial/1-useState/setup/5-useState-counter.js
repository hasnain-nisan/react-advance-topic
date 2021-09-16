import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increase = (value) => {
    setValue(value + 1);
  };

  const decrease = (value) => {
    setValue(value - 1);
  };

  const reset = (value) => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000);
  }

  return (
    <>
      <section style={{ margin: "4rem, 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => increase(value)}>
          Increase
        </button>
        <button className="btn" onClick={() => decrease(value)}>
          Decreae
        </button>
        <button className="btn" onClick={() => reset()}>
          Reset
        </button>
      </section>

      <section style={{ margin: "4rem, 0", marginTop: "4rem" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
