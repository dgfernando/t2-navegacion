import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageScreen from './screens/ImageScreen';
import OptionsScreen from './screens/OptionsScreen';
import QuizScreen from './screens/QuizScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
      </NavigationContainer>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
