import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenWelcome from '../screens/screen_welcome';
import ScanCard from '../screens/scan_card';
import ScreenInformation from '../screens/screen_information';
import ScreenCardError from '../screens/screen_card_error';
import ScreenDone from '../screens/screen_done';
import ScreenNoNoodles from '../screens/screen_no_noodles';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Screen welcome" component={ScreenWelcome} />
      <Stack.Screen name="Screen scan card" component={ScanCard} />
      <Stack.Screen name="Screen information" component={ScreenInformation} />
      <Stack.Screen name="Screen card error" component={ScreenCardError} />
      <Stack.Screen name="Screen done" component={ScreenDone} />
      <Stack.Screen name="Screen no noodles" component={ScreenNoNoodles} />
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
