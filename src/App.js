import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class  App extends React.Component {
  state = {
    user: [],
    follower: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/M-PAW')
      .then(res => {
        // res.data.message
        console.log(res)
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

    axios
    .get('https://api.github.com/users/M-PAW/followers')
    .then(res => {
      console.log(res)
      this.setState({
        follower: res.data
      })
    })
  }
  
  render(){
  return (
    <div className="App">
      <div className="userContainer">
        <h2>{this.state.user.name}</h2>
        <img src={this.state.user.avatar_url} />
        <p>Location: {this.state.user.location}</p>
        <p>Followers: {this.state.user.followers}</p> 
        <p>Following: {this.state.user.following}</p>
      </div>

      <div className="followerContainer">
        
        {this.state.follower.map( person => {
          return (
          <div className="followCard">
            <h2>{person.login}</h2>
            <p><a href={person.html_url}>GitHub</a></p>
            <img src={person.avatar_url} />
          </div>
          )
        })}
      </div>
    </div>
  );
  }
}

export default App;
