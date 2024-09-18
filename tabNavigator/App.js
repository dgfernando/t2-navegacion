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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Image') {
              iconName = 'image-outline';
            } else if (route.name === 'Options') {
              iconName = 'settings-outline';
            } else if (route.name === 'Quiz') {
              iconName = 'clipboard-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            paddingBottom: 5, 
            height: 70,
            borderTopWidth: 0, 
          },
          tabBarItemStyle: {
            marginHorizontal: 10,
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
