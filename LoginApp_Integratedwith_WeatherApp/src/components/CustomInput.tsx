import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { logDebug } from '../utils/logger';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: Props) => {

  const handleChangeText = (text: string) => {

    logDebug(`${placeholder} typing`, text);

    // VERY IMPORTANT: pass text to parent
    onChangeText(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={handleChangeText}
      autoCapitalize="none"
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
  },
});
