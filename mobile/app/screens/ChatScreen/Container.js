import React, { Component } from 'react'
import { View } from 'react-native'

import {
  Button,
  TouchableOpacity,
  Text,
  Icon,
} from 'react-native-elements';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import ActionButton from 'react-native-action-button';

import ChatScreen from './Component'

class ChatScreenContainer extends Component {

  state = {
    isModalVisible: false
  };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'CitiSense Chat',
      headerRight: (
        <Button
          title="EXIT CHAT"
          titleStyle={{color: '#06A77D'}}
          buttonStyle={{
            backgroundColor: 'transparent'
          }}
          fixNativeFeedbackRadius={true}
          onPress={() => this._toggleModal()}
        />
      )
    }

  };

  componentWillMount() {
    this.props.navigation.setParams({
      navigate: this.props.navigation.navigate
    });
  };


  
  render() {
    return (
      <View>
      <View style={{flex:1}}>
        <Button
        title="HELLO"
        />
        </View>
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
            style={{position: 'absolute', bottom: 615}}
            hideShadow={true}
            buttonColor='transparent'
            fixNativeFeedbackRadius={true}
            onPress={() => this._toggleModal()}
          />
      </View>
      </View>
    )
  }
}

export default ChatScreenContainer