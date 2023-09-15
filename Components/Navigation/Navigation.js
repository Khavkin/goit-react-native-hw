import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../Context/AuthContext";
import LoginScreen from "../../Screens/Auth/LoginScreen/LoginScreen";
import RegistrationScreen from "../../Screens/Auth/RegistrationScreen/RegistrationScreen";
import Home from "../../Screens/Main/Home";
import MapScreen from "../../Screens/Main/MapScreen";
import CommentsScreen from "../../Screens/Main/CommentsScreen";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const Stack = createNativeStackNavigator();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "transparent",
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CommentsScreen"
              component={CommentsScreen}
              options={{
                headerShown: true,
                headerTitleAlign: "center",
                headerShadowVisible: true,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
