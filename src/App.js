import React from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/layout/Navbar/navbar.component';
import Users from './components/users/users.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({users: res.data, loading: false});

    console.log(this.state.users);     
  }

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Navbar></Navbar>        
        </nav>

        <div className="users-container container">
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </div>  
      
    );
  }
}

export default App;
