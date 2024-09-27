import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {mapNavigations} from '@/constants';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

export default function AddPostScreen({route}: AddPostScreenProps) {
  const {location} = route.params;
  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
