import React, { Component } from 'react';
import { Header } from './Header';
import './App.css';
import { Router, Route } from 'react-router-dom';
import Expense from './component/Expense';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Header />
        <div className="App-intro">
          Welcome back!
          <Route path="/expense" Component= {Expense} />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
