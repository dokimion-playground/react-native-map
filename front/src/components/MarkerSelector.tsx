import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomMarker from './CustomMarker';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '@/constants';

interface MarkerSelectorProps {
  markerScore: number;
  onPressMarker: (score: number) => void;
}

export default function MarkerSelector({
  markerScore,
  onPressMarker,
}: MarkerSelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.markerLabel}>마커 선택</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.markerInputScroll}>
          {[1, 2, 3, 4, 5].map(score => {
            return (
              <Pressable
                style={[
                  styles.markerBox,
                  markerScore === score && styles.pressedMarker,
                ]}
                onPress={() => onPressMarker(score)}>
                <CustomMarker score={score} />
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 15,
  },
  markerLabel: {
    marginBottom: 15,
    color: colors.lightGrey,
  },
  markerInputScroll: {
    flexDirection: 'row',
    gap: 20,
  },
  markerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.grey,
    borderRadius: 6,
  },
  pressedMarker: {borderWidth: 2, borderColor: colors.black},
});
