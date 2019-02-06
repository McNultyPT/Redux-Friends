import React, { Component } from 'react';

import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <FriendForm />
      </div>
    );
  }
}

export default App;
