import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './Components/SplashScreen';
import QuizScreen from './Components/QuizScreen'; 
import SummaryScreen from './Components/SummaryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Splash">
        <Tab.Screen name="Splash" component={SplashScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Quiz" component={QuizScreen} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name="Summary" component={SummaryScreen} options={{ tabBarStyle: { display: 'none' } }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
