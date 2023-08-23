import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import IconButton from '../Buttons/IconButton';

export const LocationInput = ({ onChangeLocation, style, ...props }) => {
  const location = props.value;
  console.log('locationInput-1', location, currentLocation);
  const [currentLocation, setLocation] = useState(location);
  console.log('locationInput-2', location, currentLocation);

  handleOnClick = () => {
    if (onChangeLocation) onChangeLocation(currentLocation);

    console.log('onClick location');
  };

  return (
    <View style={{ ...styles.locationInputWrapper, ...style }}>
      <IconButton
        icon={<Feather name={'map-pin'} size={24} style={{ color: '#BDBDBD' }} />}
        style={styles.btnShow}
        onPress={handleOnClick}
      />
      <TextInput
        style={{ ...styles.input }}
        value={currentLocation}
        onChangeText={setLocation}
        placeholder="Місцевість..."
        caretHidden={true}
        editable={false}
      />
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
    color: '#212121',
  },
  btnShow: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default LocationInput;
