import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends } from './actions';

import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Friends />
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps, { getFriends })(App);
