import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from '../PostsScreen/PostsScreen';
import Feather from '@expo/vector-icons/Feather';
import { CreatePostsScreen } from '../CreatePostsScreen/CreatePostsScreen';
import { ProfileScreen } from '../ProfileScreen/ProfileScreen';
import IconButton from '../../../Components/Buttons/IconButton';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

//  screenOptions={{
//         tabBarShowLabel: false,
//         tabBarIconStyle: {
//           width: 70,
//           height: 40,
//           backgroundColor: '#FF6C00',
//           borderRadius: 20,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },
//       }}

export const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarButton: ({ ...props }) => {
          const icons = {
            Posts: 'grid',
            CreatePosts: 'plus',
            Profile: 'user',
          };

          const style = props.accessibilityState.selected
            ? {
                width: 70,
                height: 40,
                backgroundColor: '#FF6C00',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }
            : {
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              };

          const color = props.accessibilityState.selected ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)';

          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                style={style}
                icon={<Feather name={icons[route.name]} color={color} size={24} />}
                onPress={props.onPress}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
      })}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
