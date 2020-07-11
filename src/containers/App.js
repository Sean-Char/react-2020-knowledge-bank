import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'hksy65', name: 'Jerry', age: 75},
      { id: 'lisah98', name: 'Dak', age: 23},
      { id: 'magtf53', name: 'Zeke', age: 24}
    ],
      otherState: 'some other value',
      showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);  // old way of making a object copy
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deleteNameHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // create a copy
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler} />;
    }


    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}  
      </div>
    );
  }
}

export default App;