import React, { Component } from 'react'
import { View } from 'react-native'

import {
  Button,
  TouchableOpacity,
  Text,
} from 'react-native-elements';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import ActionButton from 'react-native-action-button';

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
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
  render() {
    return (
      <View>
        <ChatScreen /> 
        <ConfirmDialog
            title="Thank you!"
            message="Your conversation access code is: 09a3b4. Do you consent to being contacted for follow up questions?"
            visible={this.state.isModalVisible}
            onTouchOutside={() => this.setState({isModalVisible: false})}
            positiveButton={{
                title: "YES",
                onPress: 
                  () => {
                    this.props.navigation.navigate('Contact');
                    this._toggleModal();
                  }
                
            }}
            negativeButton={{
                title: "NO",
                onPress: 
                  () => {
                    this.props.navigation.navigate('Home');
                    this._toggleModal();
                  }
                
            }}
        />
        <ActionButton
            buttonColor='rgba(231,76,60,1)'
            fixNativeFeedbackRadius={true}
            onPress={() => this._toggleModal()}
          />
      </View>
    )
  }
}

export default ChatScreenContainer