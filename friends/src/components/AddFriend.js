import React from 'react';
// import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
  constructor(props){
    super(props)
  }
  
  state = {
    name: '',
    email: '',
    age: ''
  }
  
  // history = useHistory();
  componentDidMount() {
    console.log(this.props)
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addFriend = e => {
    e.preventDefault();
    // console.log(this.state);
    console.log(this.props)
    axiosWithAuth()
      .post('/api/friends', {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age
      })
      .then((res) => {
        console.log(res);
        this.props.history.push('/friends');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="AddFriend">
        <form onSubmit={this.addFriend}>
          <label>
            Name:
            <input 
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Age:
            <input 
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email: 
            <input 
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddFriend);
