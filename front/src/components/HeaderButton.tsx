import {colors} from '@/constants';
import React, {ReactNode} from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';

interface HeaderButtonProps extends PressableProps {
  labelText?: string;
  icon?: ReactNode;
  hasError?: boolean;
}

const HeaderButton = ({
  labelText,
  icon,
  hasError = false,
}: HeaderButtonProps) => {
  return (
    <Pressable disabled={hasError} style={styles.container}>
      {!labelText && icon}
      {labelText && !icon && (
        <Text style={[styles.text, hasError && styles.textError]}>
          {labelText}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primary,
  },
  textError: {
    color: colors.grey,
  },
});

export default HeaderButton;
