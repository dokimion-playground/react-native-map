import React from 'react';
import HeaderButton from '../common/HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from '@/navigations/drawer/MainDrawerNavigator';

type FeedHomeHeaderLeftProps = CompositeNavigationProp<
  StackNavigationProp<FeedStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

export default function FeedHomeHeaderLeft(
  navigation: FeedHomeHeaderLeftProps,
) {
  return (
    <HeaderButton
      icon={<Ionicons name="menu" size={25} />}
      onPress={() => navigation.openDrawer()}
    />
  );
}
