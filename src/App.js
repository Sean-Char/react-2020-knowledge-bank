import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(( person, index ) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                click={() => this.deleteNameHandler(index)}
                name={person.name} 
                age={person.age} 
                changed={event => this.nameChangeHandler(event, person.id)} 
                />
              </ErrorBoundary>
            );
          })}
        </div> 
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm testing the App!</h1>
        <p className={assignedClasses.join(' ')}>My second sentence on the page</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>

        {persons}  
        
      </div>
    );
  }
}

export default App;