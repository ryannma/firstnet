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

  constructor(props) {
    super(props);
    this._toggleModal = this._toggleModal.bind(this);
  }


  state = {
    isModalVisible: false
  };

	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    
    return {
      title: 'Watson Chat',
      headerRight: (
         <Button title='Finished'
                 underlayColor='#2986d8'
                 onPress={this._toggleModal.bind(this)}/>
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      navigate: this.props.navigation.navigate
    });
  };

   _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  
  render() {
    return (
      <View>
        <ChatScreen /> 
         <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}

export default ChatScreenContainer