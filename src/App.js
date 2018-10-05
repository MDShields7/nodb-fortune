import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor (){
    super();
    this.state = {
      fortune: 'Step right up and get your fortune',
    }
  }

  fetchData(){
    axios.get('/data').then(res => {
      this.setState({
        fortune: res.data
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Tell me my fortune</h1>
        <button onClick={() => this.fetchData()}>Fetch Fortune</button>
        <p>{this.state.fortune}</p>
      </div>
    );
  }
}

export default App;
