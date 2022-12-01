import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Feed extends Component{
  render(){
    return(
<View>
        <View style = {styles.textContainer}>
          <Text style = {{fontSize: 30}}>Feed Screen!</Text>
        </View>

        <View style = {styles.textContainer}>
          <Text>Pick Something To View!</Text>
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