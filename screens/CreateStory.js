import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class CreateStory extends Component{
  render(){
    return(
      <View>
        <View style = {styles.textContainer}>
          <Text style = {{fontSize: 30}}>Story Creating Screen!</Text>
        </View>

        <View style = {styles.textContainer}>
          <Text>Post Your Stories Here!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'orange',
    paddingTop: 20,
    paddingBottom: 20,
  },
})
