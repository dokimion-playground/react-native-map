import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAuth from '@/hooks/queries/useAuth';

export default function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <View>
      <Text>MapHomeScreen</Text>
      <Button title="로그아웃" onPress={() => logoutMutation.mutate()} />
    </View>
  );
}

const styles = StyleSheet.create({});
