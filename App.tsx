import React from 'react'
import { Text, View } from 'react-native'
import { List } from './src/List';
import { Todo } from './src/todo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Home';
import {Counter} from './src/Counter';
const Stack = createNativeStackNavigator();

function App () {
  return (   
    <View
    style={{
      flex:1,
      backgroundColor:"grey"
    }}>
      
      {/* <Components/>  */}
      {/* <List/> */}
      {/* <Todo/> */}
      {/* <Page1/> */}
      {/* <Page2/> */}
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home "
          component={Home}
          
        />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="counter" component={Counter}/>
        <Stack.Screen name="list" component={List}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}
export default App;

