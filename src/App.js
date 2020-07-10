import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jerry', age: 75},
      {name: 'Dak', age: 23},
      {name: 'Zeke', age: 24}
    ],
      otherState: 'some other value',
      showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jerry Jones', age: 75 },
        { name: event.target.value, age: 23 },
        { name: 'Zeke Elliot', age: 25 }
      ]
    })
  }

  deleteNameHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map(( person, index ) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm testing the App!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        {persons}  
        
      </div>
    );
  }
}

export default App;