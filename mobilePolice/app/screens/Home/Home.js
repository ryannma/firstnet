import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import Row from '../FoldView/Row';
import getIncidents from './Incidents';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#4A637D',
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
});


export default class Home extends Component<Props> {

  render () {
    const incidents = getIncidents();
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <ScrollView
          style={styles.scrollView}
        >
          <Row zIndex={100}
               data={incidents[0]}/>
          <Row zIndex={90} 
               data={incidents[1]}/>
          <Row zIndex={80} 
               data={incidents[2]}/>
          <Row zIndex={70} 
               data={incidents[3]}/>
          <Row zIndex={60} 
               data={incidents[4]}/>
        </ScrollView>
      </View>
    );
  }
}
