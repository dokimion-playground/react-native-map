import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {mapNavigations} from '@/constants';
import MapHomeScreen from '@/screens/map/MapHomeScreen';

const Stack = createStackNavigator<MapStackParamList>();

export type MapStackParamList = {
  [mapNavigations.MAP_HOME]: undefined;
};

export default function MapStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}
      children={null}>
      <Stack.Screen
        name={mapNavigations.MAP_HOME}
        component={MapHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
