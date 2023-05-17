import React, { useState }  from 'react';
import{ StyleSheet,
        Text,
        
        View,
        FlatList,
       
        SafeAreaView,
        TextInput,
        
        Pressable
      } from 'react-native';

     type ItemProps = { task:string}
     const Item =({task}:ItemProps)=> {
      const [color,setcolor]=useState('lightblue');
     //}
     // const Item = ({title}) => {
        return( 
          <View style={styles.item}>
            <Text
            style={{
              fontSize:10,
              fontWeight:'bold'
              
              
            }}>{task}</Text>
          </View>
          
        );
      }
      // const renderItem = ({item})=>( 
      //   <Item title={item.title}/>
      //);
      
      export const List = ({route}) => {
        //const [lists,setList]=useState([]);
        const [input,setInput]=useState('');
        const [list,addList]=useState([]);
       // const handleInputChange = (text)=>{{setInput(text)}; console.log}; 
       // console.log(input)
      const[first,setfirst]=useState(route.params.category)


        return (
          <View
          style={{
            flex:1,
            backgroundColor:"grey"
          }}>

            <Text
            style={{
              fontSize:40,
              fontWeight:'bold',
              textAlign:'center',
              marginTop:30,
              marginBottom:20,
              color:'black'
              
            }}>{first} List</Text>

  
            <SafeAreaView>  
            

      <TextInput style={{
              height: 50,
          margin: 12,
          width:350,
          elevation:10,
          alignSelf:'center',
          padding: 10,
          backgroundColor:"white"
          
            }}
            placeholder='Enter your task'             
            onChangeText={(text)=>{
              setInput(text);
              console.log(input);
            }}
            />
      <Pressable
      style={{
        width:110,
        height:40,
        backgroundColor:"white",
        marginTop:10,
        alignSelf:'center',
        borderRadius:10,
        elevation:20,
        shadowColor:"black"
      }}  onPress={()=>{addList(()=>{
        if(input!='')
        {
          console.log(input);
          return [...list,input];
        }
        else{
         return [...list];
          
        }
      })}}>
        <Text
        style={{
          textAlign:'center',
         justifyContent:'center',
         alignContent:"center",
          fontSize:25,
          marginTop:5,
          fontWeight:'bold',
          color:"black"
        }}>
          Add
        </Text>
        
        </Pressable>
       
        <FlatList
      
       renderItem={({item})=><Item task={item}/>}
       keyExtractor={(item) => list.indexOf(item).toString()}
       data={list}       
    />
        </SafeAreaView>
          </View>
        )
      }      
      const styles = StyleSheet.create({
       
        item: {
          backgroundColor: 'white',
          padding: 20,
          marginVertical: 10,
          marginHorizontal: 30,
          borderRadius:15,
          elevation:15,
          shadowColor:"black",
          shadowOpacity:10,
          
        },
      });

