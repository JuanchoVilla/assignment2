/* Assignment 2
 *  This is a little web-app that prompts the user to input text
 *  the user's text is then displayed as individual characters in
 *  an inline-block styled div
 */

// Import React and my externally defined components
import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {
  // we only need 1 key value pair for the state
  state = {
    text: ''
  };

  inputChangedHandler = (event) => {
    this.setState({text: event.target.value});
  };

  deleteCharHandler = (index) => {
    const text = this.state.text.split('');
    text.splice(index, 1);

    const newText = text.join('');
    this.setState({text: newText});
  };

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />
    })


    return (
      <div className="App">
        <input
          type='text'
          onChange={this.inputChangedHandler}
          value={this.state.text} />
        <p>{this.state.text}</p>
        <Validation length={this.state.text.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
