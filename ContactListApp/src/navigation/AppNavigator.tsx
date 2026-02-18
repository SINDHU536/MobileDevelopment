import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactListScreen from '../screens/ContactListScreen';
import ContactDetailsScreen from '../screens/ContactDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
        />

        <Stack.Screen
          name="ContactDetails"
          component={ContactDetailsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
