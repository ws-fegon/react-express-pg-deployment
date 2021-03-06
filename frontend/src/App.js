import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get(`${API_URL}/users`)
      .then(result => {
        if(result.data && result.data.users) {
          this.setState({
            users: result.data.users
          })
        }
      })
      .catch(error => {
        console.log('getting users error', error)
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>User List</h2>
        </div>
        <ul className="App-intro">
          {this.state.users.map(user => (
            <li key={user.id}>
              {`${user.username} -
                ${new Date(user.birthday).getDate()} /
                ${new Date(user.birthday).getMonth()} /
                ${new Date(user.birthday).getFullYear()}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
