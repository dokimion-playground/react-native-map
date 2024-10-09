import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '@/constants';

type VariantType = 'filled' | 'outlined';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: VariantType;
  size?: 'large' | 'medium';
}

const deviceHeight = Dimensions.get('screen').height;

export default function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  disabled = false,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        styles.container,
        styles[variant],
        pressed ? styles[`${variant}Pressed`] : styles[variant],
        disabled && styles.disabled,
      ]}
      {...props}>
      <View style={styles[size]}>
        <Text
          style={[
            styles.text,
            variant === 'filled' ? styles.filledText : styles.outlinedText,
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filled: {
    backgroundColor: colors.primary,
  },
  outlined: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  filledText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  outlinedText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: colors.textDisabled,
  },

  filledPressed: {
    backgroundColor: colors.primaryDark,
  },
  outlinedPressed: {
    borderColor: colors.primaryDark,
    backgroundColor: `${colors.primary}20`,
  },
});
