import React from 'react';

import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from './Friend';

class Friends extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render(){
    return (
      <>
        {this.state.friends.map(friend => 
          <Friend friend={friend} key={friend.id} />
        )}
      </>
    );
  }
}

export default Friends;