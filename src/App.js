import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class App extends Component {
  state = {
    persons: [
      { name: '' },
      { name: 'John' },
      { name: 'Darius' },
      { name: 'Tudor' },
      { name: 'Octavian' },
      { name: 'Matei' }
    ]
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState(
      {
        persons: [
          { name: e.target.value},
          { name: 'John' },
          { name: 'Darius' },
          { name: 'Tudor' },
          { name: 'Octavian' },
          { name: 'Matei' }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Title className="App-title">Welcome to React</Title>
        <UserInput name={this.state.persons[0].name} onChangeHandler={this.onChangeHandler}/>
        {this.state.persons.map(person => <UserOutput name={person.name} />)}
        
        {/* <UserOutput name={this.state.persons[0].name} />
        <UserOutput name={this.state.persons[1].name} />
        <UserOutput name={this.state.persons[2].name} />
        <UserOutput name={this.state.persons[3].name} />
        <UserOutput name={this.state.persons[4].name} />
        <UserOutput name={this.state.persons[5].name} /> */}
      </div>
    );
  }
}

export default App;
