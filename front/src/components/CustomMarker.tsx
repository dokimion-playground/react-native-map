import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LatLng, Marker, MyMapMarkerProps} from 'react-native-maps';
import {colors} from '@/constants';

interface CustomMarkerProps extends MyMapMarkerProps {
  coordinate?: LatLng;
  score: number;
}

const getMarkerColor = (score: number) => {
  switch (score) {
    case 1:
      return colors.grey;
    case 2:
      return colors.darkGrey;
    case 3:
      return colors.primaryLight;
    case 4:
      return colors.primaryDark;
    case 5:
      return colors.primary;
    default:
      return colors.lightGrey;
  }
};

export default function CustomMarker({
  coordinate,
  score,
  ...props
}: CustomMarkerProps) {
  const markerView = (
    <View style={styles.container}>
      <View style={[styles.marker, {backgroundColor: getMarkerColor(score)}]} />
    </View>
  );
  return coordinate ? (
    <Marker coordinate={coordinate} {...props}>
      {markerView}
    </Marker>
  ) : (
    markerView
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
