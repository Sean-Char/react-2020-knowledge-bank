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

  switchNameHandler = (newName) => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: newName, age: 75 },
        { name: 'Dak Presscott', age: 23 },
        { name: 'Zeke Elliot', age: 25 }
      ]
    })
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
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Jerry Jones 2')} 
              changed={this.nameChangeHandler} >My Hobbies: Football</Person>
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
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