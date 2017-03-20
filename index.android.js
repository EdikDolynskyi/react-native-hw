/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert
} from 'react-native';

export default class MyProject extends Component {
  
  constructor() {
    super();
    this.state = {
      albums: []
    };
    this.getAlbumsFromApiAsync();
  }

  getAlbumsFromApiAsync() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({albums: responseJson})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {
          this.state.albums.map((item, index)=>{
            return (
              <Image key={index} style={styles.button} source={{uri: item.thumbnailUrl}} />
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    width: 100,
    height: 100
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
});

AppRegistry.registerComponent('MyProject', () => MyProject);