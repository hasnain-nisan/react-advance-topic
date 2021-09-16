import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM')
  {
    const newPeoples = [...state.people, action.payload]
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: 'Item added',
    }
  }

  if (action.type === "NO_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Can not be empty",
    };
  }
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}
const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name)
    {
      const newPeople = {
        id: new Date().getTime().toString(), 
        name
      }
      dispatch({ type: "ADD_ITEM", payload: newPeople})
      setName('')
    }
    else
    {
      dispatch({ type: "NO_ITEM" });
    }
  }

  return <>
  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  <form className="form" onSubmit={handleSubmit}>
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <button type="submit">Add</button>
  </form>
  {state.people.map((person) => {
    return <div key={person.id}>
      <h4>{person.name}</h4>
    </div>
  })}
  </>;
};

export default Index;
