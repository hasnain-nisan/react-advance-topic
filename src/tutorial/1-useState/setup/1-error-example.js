import React from 'react';

const ErrorExample = () => {
  let title = "My Random Title"
  const handleClick = () => {
    console.log(title);
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
