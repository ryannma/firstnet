import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Text,
  TextInput
} from 'react-native';
import {
  Button,
  Icon,
  Input,
} from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { sendMessage } from '../../store/chat';
import { connect } from 'react-redux';

class Home extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      textInput: null
    };
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      /*title: 'CitiSense',*/
      headerLeft: (
        <Icon
          name='menu'
          color='#fff'
          containerStyle={{
            padding: 15
          }}
          onPress={() => this.props.navigation.navigate()}
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
      <Text style={styles.homeLogo}>Citi<Text style={{color: '#06A77D'}}>Sense</Text></Text>
      
      <View style={{alignItems: 'flex-end', paddingRight: 100}}>
        <View style={styles.triangleUp} />
      </View>

      <View style={{flex: 2, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch'}}>
        <View style={styles.roundedBox}>
          <TextInput
            style={styles.textReport}
            placeholder="What would you like to report?"
            multiline={true}
            underlineColorAndroid='transparent'
            onChangeText={(text) => {
              this.setState({textInput: text}
            )}}
            value={this.state.textInput}
          />
          
          <View style={styles.buttonBar}>
            <Icon
              type='entypo'
              name='camera'
              color='gray'
              onPress={() => this.props.navigation.navigate()}
              />

            <Icon
              type='entypo'
              name='video-camera'
              color='gray'
              onPress={() => this.props.navigation.navigate()}
              />
            <Icon
              name='mic'
              color='gray'
              onPress={() => this.props.navigation.navigate()}
              />
            <Icon
              name='location-on'
              color='gray'
              onPress={() => this.props.navigation.navigate()}
              />
          </View>
        </View>
      </View> 

      <View style={{flex: 1}}> 
      <Button 
        title="Submit Report"
        titleStyle={{fontSize:20}}
        buttonStyle={{
          backgroundColor: '#06A77D',
          width: 250,
        }}
        onPress={() => {
          this.props.sendMessage(this.state.textInput, this.props.userId);
          this.setState({textInput: ''});
          this.props.navigation.navigate('ChatScreen');
        }}
      />
      </View>   
    </View>
       
    );
  }
}

const mapStateToProps = state => ({
  userId: state.userId
})

const mapDispatchToProps = {
  sendMessage
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#002F68'
  },
  header: {
    height: 55
  },  
  homeLogo: {
    fontSize: 60, 
    textAlign: 'center', 
    padding: 30, 
    color:'#fff',
    fontWeight: 'bold'
  },
  triangleUp: {
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff'
  },
  roundedBox: {
    flex: 1, 
    flexDirection: 'column', 
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20, 
  },
  textReport: {
    flex: 2,
    fontSize: 20,
    padding: 20,
    textAlignVertical: 'top'
  },  
  buttonBar: {
    flex: 1, 
    flexDirection:'row', 
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
