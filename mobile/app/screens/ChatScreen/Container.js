import React, { Component } from 'react'
import { View } from 'react-native'

import {
  Button,
  TouchableOpacity,
  Text,
} from 'react-native-elements';
import Modal from "react-native-modal";

import ChatScreen from './Component'


class ChatScreenContainer extends Component {

  state = {
    isModalVisible: false
  };

	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Watson Chat'
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      navigate: this.props.navigation.navigate
    });
  };

  _toggleModal = () => {
    console.log('clickedl');
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
  render() {
    return (
      <View>
        <ChatScreen /> 
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
          </View>
        </Modal>
      </View>
    )
  }
}

export default ChatScreenContainer