import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Countly extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.appname}>
          Countly
        </Text>
        <Text style={styles.tally}>
          Tally: 0
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'

  },
  appname: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10

  },
  tally: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    fontSize: 25
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20

  },
  buttonText: {
    color: 'white', 
    textAlign: 'center', 
    fontSize: 20 
  }
});

AppRegistry.registerComponent('Countly',()=>Countly);