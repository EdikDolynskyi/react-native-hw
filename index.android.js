/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const onButtonPress = () => {
  alert('Button has been pressed!');
  navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log('position', initialPosition);
        alert(initialPosition)
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
};

const markerLatlng = {
  latitude: 37.78825,
  longitude: -122.4324
};

export default class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {initialPosition: ''};
  }

  render() {
    return (
      <View style ={styles.container}>
       <MapView
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       <MapView.Marker
        coordinate={markerLatlng}
        title={'I am here'}
        description={'Sorry, GPS ne rabotaet'}
      />
       </MapView>
       <Button
        onPress={onButtonPress.bind(this)}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }


});

AppRegistry.registerComponent('MyProject', () => MyProject);
