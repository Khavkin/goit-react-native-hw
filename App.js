import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/Auth/RegistrationScreen/RegistrationScreen';
import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';
import LoginScreen from './Screens/Auth/LoginScreen/LoginScreen';
//import PostsScreen from './Screens/PostsScreen/PostsScreen';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Screens/Main/Home';
import { AuthProvider, useAuth } from './Context/AuthContext';
import useRoute from './route';
import { Navigation } from './Components/Navigation/Navigation';
import { PostsProvider } from './Context/PostsContext';

const bgImage = require('./Images/Photo-BG.png');

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [user, setUser] = useState({});
  //const { logIn } = useAuth();
  // const routing = useRoute();

  const handleOnSubmit = ({ login = null, email, password }) => {
    console.log(login, email, password);
  };

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

  // const Stack = createNativeStackNavigator();
  // const navTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     background: 'transparent',
  //   },
  // };

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.backgroundImage}>
      <AuthProvider>
        <PostsProvider>
          <Navigation />
          {/* <NavigationContainer theme={navTheme}>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          > */}
          {/* <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={Home} /> */}

          {/* {useRoute()}
          </Stack.Navigator>
        </NavigationContainer> */}
        </PostsProvider>
      </AuthProvider>
    </ImageBackground>
  );
}

{
  /* <View style={styles.container}>
  <RegistrationScreen />
  <LoginScreen /> 
 <PostsScreen /> 
</View>; */
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
