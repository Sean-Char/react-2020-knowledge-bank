import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm testing the App!</h1>
        <Person name="Jerry" age="75" />
        <Person name="Dak" age="23">My Hobbies: Football</Person>
      </div>
    );
  }
}

export default App;
