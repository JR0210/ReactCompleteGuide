import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jacob', age: 22 },
      { name: 'Ben', age: 24 },
      { name: 'Peggy', age: 31 }
    ],
    otherState: 'This has a value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DON'T EDIT STATE DIRECTLY this.state.persons[0].name = "Jake";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Ben', age: 24 },
        { name: 'Peggy', age: 31 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jacob', age: 22 },
        { name: event.target.value, age: 24 },
        { name: 'Peggy', age: 31 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {
    let buttonStyle = {
      cursor: 'pointer',
      borderRadius: '5px',
      marginBottom: '10px'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={() => this.switchNameHandler('Jacob')}>
            My Hobbies: Racing
        </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
