import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text
} from 'react-native';
import {
  Button,
  Icon,
  Input,
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component<Props> {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'CitySense',
      headerLeft: (
        <Icon
          name='menu'
          color='#fff'
          containerStyle={{
            padding: 15
          }}
        />
      ),
      headerRight: (
        <Icon
          name='history'
          color='#fff'
          containerStyle={{
            padding: 15
          }}
          onPress={() => params.navigate('ChatScreen')}
          underlayColor='#2986d8'
        />
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      navigate: this.props.navigation.navigate
    });
  };

  render () {
    return (
      <View style={styles.homeContainer}>
        <StatusBar/>
        <View style={styles.list}>
        </View>
        <Input placeholder='What would you like to report?'/>
        <Button title="Camera"/>
        <Button title="Voice"/>
        <Button title="Submit"
                onPress={() => this.props.navigation.navigate('ChatScreen')}/>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          fixNativeFeedbackRadius={true}
          onPress={() => this.props.navigation.navigate()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    height: 55
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
})
