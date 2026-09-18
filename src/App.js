import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bussola from './screens/Bussola';
import FraseDoDia from './screens/FraseDoDia';
import Refri from './screens/Refri';

const Aba = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator 
        screenOptions={{ 
          tabBarLabelPosition: 'below-icon', 
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#0055ff' 
        }}
      >
        <Aba.Screen 
          name="Bússola" 
          component={Bussola} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>🧭</Text> }} 
        />
        <Aba.Screen 
          name="Frase do Dia" 
          component={FraseDoDia} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>✨</Text> }} 
        />
        <Aba.Screen 
          name="Refri" 
          component={Refri} 
          options={{ tabBarIcon: () => <Text style={{fontSize: 20}}>🍾</Text> }} 
        />
      </Aba.Navigator>
    </NavigationContainer>
  );
}