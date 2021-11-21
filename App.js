import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataListProvider } from './src/context/DataListContext';
const Stack = createNativeStackNavigator();
const App=()=> {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}  options={{
          headerStyle: {
            backgroundColor: '#f21561',
          
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        
        }}/>
  </Stack.Navigator>
</NavigationContainer>
  );
}

export default ()=>{
  return(
 <DataListProvider>
     <App />
 </DataListProvider>
  
 
);}


