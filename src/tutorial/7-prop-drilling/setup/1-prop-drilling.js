import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id) 
    })
  }
  return <section>
    <h3>Prop Driling</h3>
    <List removePerson={removePerson} people={people} />
  </section>;
};

const List = (props) => {
  const {people, removePerson} = props
  return <>
    {people.map((person) => {
      return (
        <SinglePerson key={person.id} {...person} removePerson={removePerson} />
      );
    })}
  </>
}

const SinglePerson = ({id, name, removePerson}) => {
  return <div className="item">
    <h5>{name}</h5>
    <button onClick={() => removePerson(id)}>Remove</button>
  </div>
}

export default PropDrilling;
