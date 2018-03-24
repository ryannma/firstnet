import React from 'react';

import {
  Button,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {
  ThinGrayLine,
  ThickGrayLine,
  ThickDarkGrayLine,
  ThinRedLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  leftPane: {
    flex: 1,
    backgroundColor: '#33373B',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ({ onPress, incident }) => (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <Text>ID: {incident.id}</Text>
      <View>
        <Button title='Expand'
                onPress={onPress}/>
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text> {incident.shortSummary}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>Distance:</Text>
          <Text>{incident.distance}</Text>
        </View>
      </View>
    </View>

  </View>
);
