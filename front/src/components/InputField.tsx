import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  Text,
  TextInputProps,
  View,
  Pressable,
} from 'react-native';
import {colors} from '../constants';
import {composeRefs} from '../utils/common';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  (
    {disabled = false, error, touched, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && !!error && styles.inputError,
          ]}>
          <TextInput
            ref={ref ? composeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholderTextColor={colors.textDisabled}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            style={[styles.input, disabled && styles.disabled]}
            {...props}
          />
          {touched && !!error && <Text style={styles.error}>{error}</Text>}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.textPrimary,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.lightGrey,
    color: colors.grey,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  error: {
    color: colors.error,
    fontSize: 12,
    paddingTop: 2,
  },
});

export default InputField;
