import { useAuth } from './Context/AuthContext';
import LoginScreen from './Screens/Auth/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/Auth/RegistrationScreen/RegistrationScreen';
import { Home } from './Screens/Main/Home';

export const useRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name="Home" component={Home} />
    </>
  );
};

export default useRoute;
