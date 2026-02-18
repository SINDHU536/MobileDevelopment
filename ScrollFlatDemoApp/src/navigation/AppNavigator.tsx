import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import ScrollViewScreen from '../screens/ScrollViewScreen';
import FlatListScreen from '../screens/FlatListScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'List Demo Home' }}
          />

          <Stack.Screen
            name="ScrollView"
            component={ScrollViewScreen}
            options={{ title: 'ScrollView Example' }}
          />

          <Stack.Screen
            name="FlatList"
            component={FlatListScreen}
            options={{ title: 'FlatList Example' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
