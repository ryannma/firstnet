import React, { Component } from 'react'
import { View } from 'react-native'
import { GiftedForm, GiftedFormManager } from 'react-native-gifted-form'

import Contact from './Component'

class ContactContainer extends Component {
	static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Contact Information'
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({
      navigate: this.props.navigation.navigate
    });
  };


  render() {
    return (
      <GiftedForm>  

        <GiftedForm.SeparatorWidget />

        <GiftedForm.TextInputWidget
          title='Full Name'
          placeholder='Marco Polo'
          clearButtonMode='while-editing'
        />

        <GiftedForm.TextInputWidget
          title='Phone #'
          placeholder='123-456-7890'
          clearButtonMode='while-editing'
        />

        <GiftedForm.TextInputWidget
          title='Email Address'
          placeholder='example@citysense.org'
          keyboardType='email-address'
          clearButtonMode='while-editing'
        />

        <GiftedForm.SeparatorWidget />

        <GiftedForm.SubmitWidget
          title='Submit'
          onSubmit={() => {
            alert('Thank you. Your response has been recorded.')
            this.props.navigation.navigate('Home');
          }}
        />

      </GiftedForm>
    )
  }

}

export default ContactContainer