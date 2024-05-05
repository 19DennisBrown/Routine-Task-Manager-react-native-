
import React from 'react'
import  {Text, TouchableOpacity, StyleSheet} from  'react-native'


export default function TodoItem({item, itemHandler}){


  return(
    <TouchableOpacity style={styles.body} onPress={()=>itemHandler(item.key)} >
      <Text>
        {item.key} {item.text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})