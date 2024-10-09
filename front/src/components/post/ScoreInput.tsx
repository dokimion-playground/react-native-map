import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import {colors} from '@/constants';

interface ScoreInputProps {
  score: number;
  onChangeScore: (value: number) => void;
}

export default function ScoreInput({score, onChangeScore}: ScoreInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>평점</Text>
        <Text style={styles.labelText}>{score}점</Text>
        <Slider
          value={score}
          onValueChange={onChangeScore}
          step={1}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: colors.darkGrey,
  },
});
