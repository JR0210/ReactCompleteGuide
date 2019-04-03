import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'asdasd', name: 'Jacob', age: 22 },
            { id: 'zxczxcdfgdf', name: 'Ben', age: 24 },
            { id: 'qwqdaszxc', name: 'Peggy', age: 31 }
        ],
        otherState: 'This has a value',
        showPersons: false
    }

    // switchNameHandler = (newName) => {
    //     // DON'T EDIT STATE DIRECTLY this.state.persons[0].name = "Jake";
    //     this.setState({
    //         persons: [
    //             { name: newName, age: 22 },
    //             { name: 'Ben', age: 24 },
    //             { name: 'Peggy', age: 31 }
    //         ]
    //     });
    // }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice(); // Slice without arguments creates a copy of the original data, making persons immutable
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
        this.setState({ persons: persons })
    }
    
    nameChangedHandler = (event, personIndex) => {
        const persons = [...this.state.persons];
        persons[personIndex].name = event.target.value;
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }

    render() {
        const buttonStyle = {
            cursor: 'pointer',
            borderRadius: '5px',
            marginBottom: '10px',
            color: 'white',
            backgroundColor: 'green',
            height: '2rem',
            outline: 'none'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangedHandler(event, index)}
                                name={person.name}
                                age={person.age}
                                key={person.id} />
                        )
                    })}
                </div>
            )

            buttonStyle.backgroundColor = 'red';
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
