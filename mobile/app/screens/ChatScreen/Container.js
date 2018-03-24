import React, { Component } from 'react'

import ChatScreen from './Component'

class ChatScreenContainer extends Component {
	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    
    return {
      title: 'Watson Chat'
    }
  };
  
  render() {
    return (
      <ChatScreen />
    )
  }
}

export default ChatScreenContainer