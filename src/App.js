import React from 'react';
import './App.css';

import Navbar from './components/layout/Navbar/navbar.component';
import Users from './components/users/users.component';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Navbar></Navbar>        
        </nav>

        <div className="users-container container">
          <Users></Users>
        </div>
      </div>  
      
    );
  }
}

export default App;
