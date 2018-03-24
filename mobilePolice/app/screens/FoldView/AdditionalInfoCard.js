import React from 'react';

import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import {
  ThinGrayLine,
  ThickDarkGrayLine,
} from './Lines';

export default ({ onPress, incident }) => ( 
  <View
    style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',

      backgroundColor: '#FFFFFF',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#BDC2C9',
    }}
  >
    <View style={{ flex: 1 }}>
      <Text> Report Status: </Text>
    </View>

    <View style={{ flex: 1 }}>
      <Text>{incident.reportStatus}</Text>
    </View>

  </View>
);
