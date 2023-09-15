import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostsScreen from "./CreatePostsScreen";

const CreatePostsStack = createNativeStackNavigator();

export const CreatePosts = ({ navigation }) => {
  return (
    <CreatePostsStack.Navigator
      initialRouteName="CreatePostsScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <CreatePostsStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerShadowVisible: true,
        }}
      />
    </CreatePostsStack.Navigator>
  );
};

export default CreatePosts;
