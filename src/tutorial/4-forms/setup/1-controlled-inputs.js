import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState("")
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email) 
    {
      const person = {firstName, email}
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    }
  }

  return (
    <>
      <h1>React Form</h1>
      <article>
        <form className="form" id="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </article>

      <section>
        {people.map((p) => {
          const {firstName, email} = p
          return <div className="item" key={firstName}>
            <h3>{firstName}</h3>
            <h6>{email}</h6>
          </div>
        })}
      </section>
    </>
  );
};

export default ControlledInputs;
