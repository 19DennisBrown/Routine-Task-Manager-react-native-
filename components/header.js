import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'


export default function Header(){

  return(
    <View style = {styles.header}>
      <Text style={styles.title}>task manager🛺</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor:'darkblue',
    paddingVertical:70,
  },
  title:{
    textAlign:'center',
    fontSize:40,
    color:'grey',
    fontWeight:'bold',
    textDecorationLine:'underline'
  }
})