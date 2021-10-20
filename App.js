import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createStackNavigator } from 'react-navigation-stack';
import { Text, TouchableOpacity, View ,StyleSheet} from "react-native";
import { GiHamburgerMenu } from "react-icons/gi";

import HomeScreen from "./screens/HomeScreen";
import Event from "./screens/Event"
import ScannScreen from "./screens/ScannScreen";
// import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{ title: '' }}
      />  
      <Stack.Screen
          name="Event"
          component={Event}
          options={{ title: 'Evento' ,
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('scaner boton')}>
                <Text style={styles.icono}>Options</Text>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen
          name='ScannScreen'
          component={ScannScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
    
  icono: {
    marginRight: 10,
  }
});

export default App;