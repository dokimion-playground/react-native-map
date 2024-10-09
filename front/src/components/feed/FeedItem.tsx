import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {ResponsePost} from '@/api/post';
import React from 'react';
import {getDateWithSeparator} from '@/utils';

interface FeedItemProps {
  post: ResponsePost;
}

export default function FeedItem({post}: FeedItemProps) {
  return (
    <View style={styles.container}>
      <Text>{post.title}</Text>
      {post.images.length > 0 && (
        <View key={post.id} style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `${
                Platform.OS === 'ios'
                  ? 'http://localhost:3030/'
                  : 'http://10.0.2.2:3030/'
              }${post.images[0].uri}`,
            }}
            resizeMode="cover"
          />
          {post.images.length === 0 && (
            <View style={[styles.imageContainer, styles.emptyImageContainer]}>
              <Text>No Image</Text>
            </View>
          )}
          <View>
            <Text>{getDateWithSeparator(post.date, '/')}</Text>
            <Text>{post.title}</Text>
            <Text numberOfLines={1}>{post.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    marginVertical: 12,
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  emptyImageContainer: {},
});
