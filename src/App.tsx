import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { APIProvider } from './api';
import ConnectionListScreen from './screens/ConnectionListScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <APIProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ConnectionList"
            component={ConnectionListScreen}
            options={{ title: 'Connections' }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </APIProvider>
  );
};

export default App;