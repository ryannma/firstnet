import React from 'react';

import {
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
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
    backgroundColor: '#06A77D',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightPane: {
    flex: 2,
    padding: 16,
    backgroundColor: '#fff',
},
  roundedBox: {
    flex: 1, 
    flexDirection: 'column', 
    borderRadius: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20, 

  },
});

export default ({ onPress, incident }) => (
  <View style={styles.container}>

    <View style={styles.leftPane}>
      <Text style={{fontWeight: 'bold'}}>ID: {incident.id}</Text>
      
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
      <Image
         style={{width: 90, height: 90, marginTop: 10}}
         source={incident.imageSrc}
       />
     </View>
      <View style={{flex:1, justifyContent:'flex-end'}}>
        <TouchableOpacity style={{backgroundColor: '#000', alignItems: 'center', padding: 5}}
                          
                          onPress={onPress}
                        >
          <Text style={{color: '#fff'}}>More Info</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.rightPane}>
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold'}}>3/14/2018 4:23PM</Text>

        <Text style={{paddingTop:10}}>{incident.shortSummary}</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        
          <Text style={{fontSize:12, textAlign: 'right'}}>Distance: {incident.distance}</Text>
        
      </View>
    </View>

  </View>
);
