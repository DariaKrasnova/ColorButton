import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, Text } from 'react-native';



export default class ColorButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Нажми кнопку!",
      colorText: null
     };
  }

  onPress = (text, color) => {
    this.setState({
  
      titleText: text,
      colorText: color
    })
  }

    render() {
      let colorT = this.state.colorText ? {color: this.state.colorText} : null
      return (
        <View style={styles.View}>
          <View style={styles.textView}> 
            <Text style={[styles.text, colorT]}>{this.state.titleText}</Text>
          </View>
        <View style={styles.container}>
          <TouchableOpacity 
              style={styles.red}
              onPress={()=> this.onPress('Красный', 'red')}/>        
          <TouchableOpacity 
              style={styles.yellow}
              onPress={()=> this.onPress('Желтый', 'yellow')} />
          <TouchableOpacity 
              style={styles.green}
              onPress={()=> this.onPress('Зеленый', 'green')} />
        </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create ({
    textView:{
      top: 150,
      alignItems: 'center'
     },
    View: {
      flex: 1,
      alignItems: 'center'
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    text: {
      color: 'orange',
      fontSize: 20,
      fontWeight: 'bold'
    },
    red: {
      flex: 1,
      width: 150,
      height: 150,
      backgroundColor: 'red'
    },
    yellow: {
      flex: 1,
      width: 150,
      height: 150,
      backgroundColor: 'yellow'
    },
    green: {
      flex: 1,
      width: 150,
      height: 150,
      backgroundColor: 'green'
    }
  })