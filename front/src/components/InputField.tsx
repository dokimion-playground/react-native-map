import React, {ForwardedRef, forwardRef, ReactNode, useRef} from 'react';
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
  icon?: ReactNode;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef(
  (
    {disabled = false, error, touched, icon, ...props}: InputFieldProps,
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
            props.multiline && styles.multiLine,
            touched && !!error && styles.inputError,
          ]}>
          <View style={Boolean(icon) && styles.innerContainer}>
            {icon}
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
  innerContainer: {flexDirection: 'row', alignItems: 'center'},
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
  multiLine: {
    paddingBottom: deviceHeight > 700 ? 45 : 30,
  },
});

export default InputField;
