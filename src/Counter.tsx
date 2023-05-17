import React, { useState } from 'react'
import { Button, Pressable, Text, View, _View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Counter=({navigation}:{navigation:any}) =>{
    let [count,setCount]=useState(0);
  return (
   <View
   style={{
    flex:1,
    backgroundColor:"grey",
   }}>
    <Name name='shanil'/>
        <Text
        style={{
            fontSize:40,
            color:"black",
            fontWeight:'bold',
            textAlign:'center',
            marginTop:30,
        }}>Counter</Text>



        <View>
      <Pressable
       style={{
        width:60,
        height:60,
        backgroundColor:"white",
        alignSelf:'center',
        marginTop:50,
        borderRadius:25,
        elevation:10,
        shadowOpacity:500,
       
    }} onPress={()=>{setCount(count+1)}}>   

     <Text
        style={{
            color:"black",
            fontSize:50,
            textAlign:'center',
            fontFamily:"elvertica"
        }}>
            +</Text>    
      </Pressable>
        </View>


          <View>
            <Text
            style={{
                color:"white",
                textAlign:'center',
                fontSize:20,
                
            }}>
                Increment
            </Text>
          </View>
          <View>



      <Pressable
       style={{
        width:60,
        height:60,
        backgroundColor:"white",
        alignSelf:'center',
        marginTop:30,
        borderRadius:25,
    }}
    onPress={()=>{setCount(count-1)}}>
        <Text
        style={{
            color:"black",
            fontSize:50,
            textAlign:'center'
        }}>
            -</Text>
            </Pressable>  


            <View>
            <Text
            style={{
                color:"white",
                textAlign:'center',
                fontSize:20
            }}>
                Decrement
            </Text>
          </View>

            <Pressable
       style={{
        width:150,
        height:60,
        backgroundColor:"white",
        alignSelf:'center',
        justifyContent:'center',
        marginTop:30,
        borderRadius:25,
        
    }} onPress={()=>{setCount(count=0)}}>
        <Text
        style={{
            color:"black",
            fontSize:35,
            textAlign:'center',
            
            
        }}>
            Reset</Text>
            </Pressable>  
            

        </View>

       <View
        style={{
            width:150,
            height:100,
            backgroundColor:"white",
            alignSelf:'center',
            marginTop:40,
            justifyContent:'center',
            
            borderRadius:15
        }}>
       <Text
       style={{
        fontSize:60,
        fontWeight:'bold',
        textAlign:'center',
        color:"black"
       }}>{count}</Text>
       </View>

        


   </View>
  )
}
function Name(props)
{
return(
    <View>
        <Text style={{
             fontSize:50,
             color:"black",
             fontWeight:'bold',
             textAlign:'center',
             marginTop:40,
            
        }}>
          Hello {props.name}...
        </Text>
    </View>
)
}
export default Counter;
