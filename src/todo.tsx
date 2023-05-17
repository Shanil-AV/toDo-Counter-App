import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

export const Todo = ({navigation}:{navigation:any}) => {
  const [category,setCategory]=useState('');
  return (
    <View
    style={{
      flex:1,
      backgroundColor:"grey",
    }}>
      <Text
      style={{
        fontSize:45,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:270,
        color:"black",
      }}>
        toDo App
      </Text>
      <TextInput style={{
     width:290,
     height:40,
     backgroundColor:"white",
     alignSelf:'center',
     marginTop:20,
     borderRadius:5,
     elevation:20,
      }}
      placeholder='Enter your Category' onChangeText={(name)=>{setCategory(name)}}>
        
      </TextInput>

      <Pressable
      style={{
        width:100,
        height:30,
        backgroundColor:"white",
        marginTop:15,
        alignSelf:'center',
        borderRadius:10,
        elevation:20,
        shadowColor:"black"
      }} onPress={()=>{navigation.navigate('list',{category})}} >
        <Text
        style={{
          fontSize:20,
          textAlign:'center',
          marginTop:2,
          fontWeight:'bold',
          color:"black",
        }}>
          Lists
        </Text>
      </Pressable>

    </View>
  )
}
