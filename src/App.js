import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(( person, index ) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'white'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm testing the App!</h1>
          <p className={classes.join(' ')}>My second sentence on the page</p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>

          {persons}  
          
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);