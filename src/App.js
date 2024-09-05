import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native'; // Import StatusBar
import StackNavigator from './Routes/StackNavigator';

const App = () => {
  console.reportErrorsAsExceptions = true;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
