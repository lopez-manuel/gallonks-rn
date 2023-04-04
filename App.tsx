import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './src/screens/MainScreen';
import { StackNavigation } from './src/navigation/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}
