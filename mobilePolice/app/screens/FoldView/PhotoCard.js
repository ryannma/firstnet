import React from 'react';

import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {
  ThinGrayLine,
  ThickWhiteLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33373B',
    padding: 10,
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default ({ onPress, incident }) => (
  <View style={styles.container}>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5A4A9C',
        height: 40,
        padding: 10,
      }}
    >
      <Button title='Min.'
              onPress={onPress} />
      <Text>Incident: {incident.incidentType}</Text>
    </View>

    <View style={styles.card}>
      <View>
       <Image
          style={{width: 50, height: 50}}
          source={incident.imageSrc}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 10,
          paddingBottom: 0,
        }}
      >
        <Text>{incident.detailedSummary}</Text>
      </View>

    </View>

  </View>
);
