import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './containers/LandingPage';
import CreateGame from './containers/CreateGame';
import JoinGame from './containers/JoinGame';
import InstructionPageOne from './containers/InstructionPageOne';
import InstructionPageTwo from './containers/InstructionPageTwo';
import InstructionPageThree from './containers/InstructionPageThree';
import InstructionPageFour from './containers/InstructionPageFour';
import ExpandPackForm from './containers/ExpandPackForm';
import ShareAndStart from './containers/ShareAndStart';
import Countdown from './containers/Countdown';
import PrimaryLoadScreen from './containers/PrimaryLoadScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={LandingPage} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Start" component={CreateGame} />
        <Stack.Screen name="Join" component={JoinGame} />
        <Stack.Screen name="Instructions 1" component={InstructionPageOne} />
        <Stack.Screen name="Instructions 2" component={InstructionPageTwo} />
        <Stack.Screen name="Instructions 3" component={InstructionPageThree} />
        <Stack.Screen name="Instructions 4" component={InstructionPageFour} />
        <Stack.Screen name="Expand Pack" component={ExpandPackForm} />
        <Stack.Screen name="Share And Start" component={ShareAndStart} />
        <Stack.Screen name="Countdown" component={Countdown} />
        <Stack.Screen name="Join Wait" component={PrimaryLoadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
