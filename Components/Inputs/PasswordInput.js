import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SecondaryButton from '../Buttons/SecondaryButton';

export const PasswordInput = ({ value, onChangeText }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  handleOnClick = () => {
    //  alert(isShowPassword);
    setIsShowPassword(!isShowPassword);
  };

  return (
    <View style={styles.passwordInputWrapper}>
      <TextInput
        placeholder="Пароль"
        textContentType="password"
        secureTextEntry={isShowPassword ? false : true}
        style={{ ...styles.input, borderColor: isOnFocus ? '#FF6C00' : '#E8E8E8' }}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        value={value}
        onChangeText={onChangeText}
      />
      <SecondaryButton
        buttonText={isShowPassword ? 'Скрыть' : 'Показать'}
        style={{ button: styles.btnShow }}
        onClick={handleOnClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordInputWrapper: {
    position: 'relative',
  },
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
  btnShow: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 71,
  },
});

export default PasswordInput;
