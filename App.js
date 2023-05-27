import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen/RegistrationScreen';
import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import PostsScreen from './Screens/PostsScreen/PostsScreen';

const bgImage = require('./Images/Photo-BG.png');

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  // const [fontsLoaded] = useFonts({
  //   RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
  //   RobotoMedium: require('./assets/Fonts/Roboto-Medium.ttf'),
  //   RobotoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
  // });

  useEffect(() => {
    const loadFonts = async () => {
      await loadAsync({
        RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
        RobotoMedium: require('./assets/Fonts/Roboto-Medium.ttf'),
        RobotoRegular: require('./assets/Fonts/Roboto-Regular.ttf'),
      });
      setIsFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!isFontsLoaded) return null;

  return (
    <>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.backgroundImage}
      ></ImageBackground>

      <View style={styles.container}>
        {/* <RegistrationScreen /> */}
        <LoginScreen />
        {/* <PostsScreen /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  backgroundImage: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: -1,
    // justifyContent: 'center',
  },
});
