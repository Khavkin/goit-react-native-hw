import {
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import IconButton from '../../Components/Buttons/IconButton';
import Feather from '@expo/vector-icons/Feather';
import { FontAwesome } from '@expo/vector-icons';
import MainButton from '../../Components/Buttons/MainButton';
import LocationInput from '../../Components/Inputs/LocationInput';

export const CreatePostsScreen = ({ navigation, route }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image}></Image>
          <Text style={{ fontSize: 16, color: '#BDBDBD' }}>Завантажте фото</Text>
          <IconButton
            icon={<FontAwesome name={'camera'} size={24} style={{ color: '#BDBDBD' }} />}
            style={{
              position: 'absolute',
              width: 60,
              height: 60,
              //left: Dimensions.get('window').width / 2 - 30,
              left: '50%',
              top: '50%',
              transform: [{ translateX: -25 }, { translateY: -50 }],
              borderRadius: 50,
              backgroundColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
        <TextInput
          placeholder="Назва..."
          style={{
            borderBottomColor: '#E8E8E8',
            borderBottomWidth: 1,
            marginTop: 32,
            height: 50,
            width: '100%',
          }}
        />
        <LocationInput
          location="Місцевість..."
          style={{
            marginTop: 16,
          }}
        />

        <MainButton
          buttonText="Опубліковати"
          style={{ button: { marginTop: 32 } }}
          onPress={() => {
            console.log('Опубліковати');
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    heigth: 267,
    width: '100%',
    backgroundColor: '#FFF',
    position: 'relative',
  },
  image: {
    height: 240,
    width: '100%',
    // width: 343,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
});

export default CreatePostsScreen;
