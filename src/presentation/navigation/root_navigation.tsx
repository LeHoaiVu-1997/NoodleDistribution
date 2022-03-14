import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenWelcome from '../screens/screen_welcome';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen welcome" component={ScreenWelcome} />
    </Stack.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
