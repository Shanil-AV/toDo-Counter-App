import React from 'react'
import { Pressable, Text, View } from 'react-native'

export const Home = ({navigation}:{navigation:any}) => {
  return (
    <View
    style={{
      flex:1,
      backgroundColor:"grey",
    }}>
        <Text
        style={{
            fontSize:40,
            textAlign:'center',
            marginTop:20,
            fontWeight:'bold',
            color:"black",
            
        }}>
            WELCOME
        </Text>
        <Pressable
        style={{
          width:135,
          height:45,
          backgroundColor:"white",
          alignSelf:'center',
          marginTop:250,
          borderRadius:10,


        }}onPress={()=>{navigation.navigate('Todo')}}>
          <Text
          style={{
            textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
            marginTop:4,
            color:"black"
          }}>
           toDo
          </Text>
        </Pressable>

        <Pressable
        style={{
          width:135,
          height:45,
          backgroundColor:"white",
          alignSelf:'center',
          marginTop:25,
          borderRadius:10,


        }} onPress={()=>{navigation.navigate('counter')}}>
          <Text
          style={{
            textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
            marginTop:4,
            color:"black",
            elevation:10,

          }}>
           Counter
          </Text>
        </Pressable>
    </View>
  )
}
