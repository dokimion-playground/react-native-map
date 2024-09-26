import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LatLng, Marker, MapMarkerProps} from 'react-native-maps';
import {colors} from '@/constants';

interface CustomMarkerProps extends MapMarkerProps {
  coordinate: LatLng;
}

export default function CustomMarker({
  coordinate,
  ...props
}: CustomMarkerProps) {
  return (
    <Marker coordinate={coordinate} {...props}>
      <View style={styles.container}>
        <View style={[styles.marker, {backgroundColor: colors.primary}]} />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 32,
    alignItems: 'center',
  },
  marker: {
    transform: [{rotate: '45deg'}],
    width: 27,
    height: 27,
    borderRadius: 27,
    borderBottomRightRadius: 1,
    borderWidth: 1,
    borderColor: colors.black,
  },
});
