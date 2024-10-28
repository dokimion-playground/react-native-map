import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FeedList from '@/components/feed/FeedList';

export default function FeedHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
