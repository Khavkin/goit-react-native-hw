import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const EmailInput = ({ value, onChangeText }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <TextInput
      placeholder="Адрес электронной почты"
      inputMode="email"
      style={{ ...styles.input, borderColor: isOnFocus ? '#FF6C00' : '#E8E8E8' }}
      onFocus={() => setIsOnFocus(true)}
      onBlur={() => setIsOnFocus(false)}
      value={value}
      onChangeText={onChangeText}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'RobotoRegular',
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    // borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
    paddingRight: 103,
  },
});

export default EmailInput;
