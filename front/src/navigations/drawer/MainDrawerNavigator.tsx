import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarHomeScreen from '@/screens/CalendarHomeScreen';
import MapStackNavigator, {MapStackParamList} from '../stack/MapStackNavigator';
import {colors, mainNavigations} from '@/constants';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';
import CustomDrawerContent from './CustomDrawerContent';
import FeedStackNavigator from '../stack/FeedStackNavigator';

export type MainDrawerParamList = {
  [mainNavigations.HOME]: NavigatorScreenParams<MapStackParamList>;
  [mainNavigations.FEED]: undefined;
  [mainNavigations.CALENDAR]: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

function DrawerIcons(route: RouteProp<MainDrawerParamList>, focused: boolean) {
  let iconName = '';

  switch (route.name) {
    case mainNavigations.HOME: {
      iconName = 'location-on';
      break;
    }
    case mainNavigations.HOME: {
      iconName = 'book';
      break;
    }
    case mainNavigations.CALENDAR: {
      iconName = 'event-note';
      break;
    }
  }

  return (
    <MaterialIcons
      name={iconName}
      color={focused ? colors.black : colors.grey}
    />
  );
}

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={({route}) => ({
        drawerType: 'front',
        drawerIcon: ({focused}) => DrawerIcons(route, focused),
        drawerStyle: {
          width: Dimensions.get('screen').width * 0.6,
          backgroundColor: colors.white,
        },
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: colors.grey,
        drawerActiveBackgroundColor: colors.primary,
        drawerInactiveBackgroundColor: colors.grey,
        headerShown: false,
      })}>
      <Drawer.Screen
        name={mainNavigations.HOME}
        component={MapStackNavigator}
        options={{
          title: '홈',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.FEED}
        component={FeedStackNavigator}
        options={{
          title: '피드',
        }}
      />
      <Drawer.Screen
        name={mainNavigations.CALENDAR}
        component={CalendarHomeScreen}
        options={{
          title: '캘린더',
        }}
      />
    </Drawer.Navigator>
  );
}
