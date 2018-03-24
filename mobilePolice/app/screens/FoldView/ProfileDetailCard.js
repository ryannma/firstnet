import React from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {
  Input,
} from 'react-native-elements';
import {
  ThinGrayLine,
  ThickGrayLine,
} from './Lines';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexDirection: 'column',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#BDC2C9',
  },
});

export default ({ onPress }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text>Add Notes:</Text>
    </View>

    <View style={{ flex: 1 }}>
       <Input placeholder='What would you like to report?'/>
    </View>
  </View>
);
