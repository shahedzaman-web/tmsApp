
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from './src/screen/LoginScreen';
import OutletScreen from './src/screen/OutletScreen';
import DrawerContaints from './src/screen/DrawerContaints';

const AppStack = createNativeStackNavigator();
const AppStackScreens = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Outlet" component={OutletScreen} />
    </AppStack.Navigator>
  );
};

const DrawerStack = createDrawerNavigator();
const DrawerStackScreens = () => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
      headerMode="none"
      drawerContent={props => <DrawerContaints {...props} />}>
      <DrawerStack.Screen
        name="App"
        component={AppStackScreens}
        options={{drawerLabel: 'Home'}}
      />
    </DrawerStack.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
 


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Drawer" component={DrawerStackScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
