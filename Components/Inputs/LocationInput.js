import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import IconButton from '../Buttons/IconButton';

export const LocationInput = ({ location, onChangeText, style }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  handleOnClick = () => {
    //  alert(isShowPassword);
    setIsShowPassword(!isShowPassword);
  };

  return (
    <View style={{ ...styles.locationInputWrapper, ...style }}>
      <IconButton
        icon={<Feather name={'map-pin'} size={24} style={{ color: '#BDBDBD' }} />}
        style={styles.btnShow}
        onClick={handleOnClick}
      />
      <Text style={{ ...styles.input }}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationInputWrapper: {
    flexDirection: 'row',
    height: 50,

    width: '100%',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'RobotoRegular',

    flex: 1,
    color: '#BDBDBD',
  },
  btnShow: {
    //  position: 'absolute',
    // left: 0,
    // top: 16,
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default LocationInput;
