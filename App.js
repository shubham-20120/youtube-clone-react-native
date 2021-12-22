import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import SearchScreen from './src/screens/SearchScreen';
import VideoPlayer from './src/screens/VideoPlayer';
import { FontAwesome } from '@expo/vector-icons';
import { reducer } from './src/reducer/reducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = "home"
          } else if (route.name === 'Explore') {
            iconName = "search"
          } else if (route.name === "Subscribe") {
            iconName = "user"
          }
          return <FontAwesome name={iconName} size={29} color={color} />
        },
        tabBarActiveTintColor: 'red',
        headerShown: false
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="rootScreen" component={RootHome} />
          <Stack.Screen name="search" screenOptions={() => { headerShown: false }} component={SearchScreen} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}