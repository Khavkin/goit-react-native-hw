import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MainButton from '../../Components/Buttons/MainButton';
import { SecondaryButton } from '../../Components/Buttons/SecondaryButton';
import PasswordInput from '../../Components/Inputs/PasswordInput';
import EmailInput from '../../Components/Inputs/EmailInput';
import DefaultInput from '../../Components/Inputs/DefaultInput';
import IconButton from '../../Components/Buttons/IconButton';

const imgPlus = require('../../Images/plus.png');
const imgX = require('../../Images/x.png');
const imgAvatar = require('../../Images/avatar.png');

export const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardShown(true)
    );
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardShown(false)
    );

    return () => {
      if (keyboardDidShowListener) {
        keyboardDidShowListener.remove();
      }
      if (keyboardDidHideListener) {
        keyboardDidHideListener.remove();
      }
    };
  }, []);

  const handleOnRegister = () => {
    console.log(`\nlogin:${login},\nemail:${email},\npassword:${password}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.kavContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ ...styles.container, marginBottom: isKeyboardShown ? -170 : 0 }}>
          <View style={styles.avatarWrapper}>
            <Image source={isAvatar ? imgAvatar : null} style={styles.avatar}></Image>
            <View style={{ ...styles.btnPlus }}>
              {/* , borderColor: '#FF6C00' */}
              <IconButton
                icon={
                  <Feather
                    name="plus"
                    size={18}
                    color="#FF6C00"
                    //   style={{ transform: [{ rotate: '45deg' }] }}
                  />
                }
              />
              {/* <Image source={isAvatar ? imgX : imgPlus} style={{ width: 13, height: 13 }}></Image> */}
            </View>
          </View>

          <Text style={styles.title}>Регистрация</Text>
          <DefaultInput placeHolder="Логин" value={login} onChangeText={setLogin} />

          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput value={password} onChangeText={setPassword} />

          <MainButton
            buttonText="Зарегистрироваться"
            style={{ button: { marginTop: 23 } }}
            onClick={handleOnRegister}
          />
          <SecondaryButton buttonText="Уже есть аккаунт? Войти" onClick={null} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  kavContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 78,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: 'relative',
    display: 'flex',
    gap: 16,
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatar: { width: 120, height: 120 },
  btnPlus: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: -25 / 2,
    bottom: 14,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16,
  },
  title: {
    fontFamily: 'RobotoBold',
    marginBottom: 17,
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
