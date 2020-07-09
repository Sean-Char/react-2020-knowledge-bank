import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Jerry', age: 75 },
      { name: 'Dak', age: 23 },
      { name: 'Zeke', age: 24 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
       { name: 'Jerry Jones', age: 75 },
       { name: 'Dak Presscott', age: 23 },
       { name: 'Zeke Elliot', age: 25 }
      ]
    });
  };
 
  return (
    <div className="App">
      <h1>Hi, I'm testing the App!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Football</Person>
    </div>
  );
  
}

export default app;


