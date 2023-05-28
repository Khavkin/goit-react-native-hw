import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const DefaultInput = ({ placeHolder = '', value, onChangeText }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <TextInput
      placeholder={placeHolder}
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
    color: '#212121',
    textDecorationLine: 'none',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
    paddingRight: 103,
  },
});

export default DefaultInput;
