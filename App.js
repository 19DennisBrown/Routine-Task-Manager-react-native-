import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, {useState} from 'react'
import Header from './components/header';
import TodoItem from './components/todoItem';
export default function App() {

  const [todos, setTodos] = useState([
    {text:'buy coffee', key:1},
    {text:'create app', key:2},
    {text:'play gts2', key:3},
  ])

  const itemHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key)
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.content}>
        <Text style={styles.listHeader}>
          tasks
        </Text>
        <View style={styles.list}>
          <FlatList
           numColumns={2}
           data={todos}
           renderItem={({ item })=>{
            return(
              <Text style={styles.item}>
                <TodoItem item={item} itemHandler={itemHandler}/>
              </Text>
            )
           }}

          />
        </View>
      </View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  content:{
    alignItems:'center',
    // backgroundColor:'yellow',
    width:400,
    // paddingHorizontal:10,
    marginVertical:20,
    marginHorizontal:'auto',
    placeItems:'center',
    // justifyContent:'center',
    paddingVertical:30,

  },
  listHeader:{
    textAlign:'center',
    fontSize:30
  },
  list:{
    marginVertical:25,
  },
  item:{
    width:150,
    borderWidth:2,
    margin:12,
    textAlign:'center',
    paddingVertical:15,
    borderRadius:8,
    borderColor:'#bbb',
  }
});
