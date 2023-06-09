import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostsScreen from './PostsScreen';
import Feather from '@expo/vector-icons/Feather';
import { CreatePostsScreen } from './CreatePostsScreen';
import { ProfileScreen } from './ProfileScreen';
import IconButton from '../../Components/Buttons/IconButton';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Caption from '../../Components/Texts/Caption';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  console.log(state.routes, state.index, state.routes[state.index].name);
  const icons = {
    Posts: 'grid',
    CreatePosts: 'plus',
    Profile: 'user',
  };

  return (
    <View style={{ flexDirection: 'row', height: 83, backgroundColor: '#fff' }}>
      {state.routes[state.index].name === 'CreatePosts' ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            style={{
              width: 70,
              height: 40,
              backgroundColor: '#F6F6F6',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            icon={<Feather name={'trash-2'} size={24} color="#BDBDBD" />}
          />
        </View>
      ) : (
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const style = isFocused
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

          const color = isFocused ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

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
                onPress={onPress}
              />
            </View>
          );
        })
      )}
    </View>
  );
}

export const Home = ({ navigation, route }) => {
  console.log(route);
  const { email, login } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        // tabBarButton: ({ ...props }) => {
        //   const icons = {
        //     Posts: 'grid',
        //     CreatePosts: 'plus',
        //     Profile: 'user',
        //   };

        //   const style = props.accessibilityState.selected
        //     ? {
        //         width: 70,
        //         height: 40,
        //         backgroundColor: '#FF6C00',
        //         borderRadius: 20,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //       }
        //     : {
        //         width: 70,
        //         height: 40,
        //         borderRadius: 20,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //       };

        //   const color = props.accessibilityState.selected ? '#FFFFFF' : 'rgba(33, 33, 33, 0.8)';

        //   return (
        //     <View
        //       style={{
        //         flex: 1,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //       }}
        //     >
        //       <IconButton
        //         style={style}
        //         icon={<Feather name={icons[route.name]} color={color} size={24} />}
        //         onPress={props.onPress}
        //       />
        //     </View>
        //   );
        // },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
        // header: ({ navigation, route, options }) => {
        //   return (
        //     <View style={styles.userMenu}>
        //       <Caption style={styles.caption}>Публикации</Caption>
        //       {/* <IconButton icon={<Feather name="log-out" size={20} color="#BDBDBD" />} /> */}
        //     </View>
        //   );
        // },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerShadowVisible: true,
          headerRight: () => {
            return (
              <IconButton
                icon={<Feather name="log-out" size={20} color="#BDBDBD" />}
                style={{ marginRight: 16, width: 24, height: 24 }}
              />
            );
          },
        }}
        initialParams={{ login, email }}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerShadowVisible: true,
          headerLeft: () => {
            return (
              <IconButton
                icon={<Feather name="arrow-left" size={20} color="#BDBDBD" />}
                style={{ marginLeft: 16, width: 24, height: 24 }}
                onPress={() => {
                  navigation.navigate('Posts');
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

styles = StyleSheet.create({
  userMenu: {
    height: 88,
    paddingTop: 28,
    paddingRight: 19,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  caption: {
    color: '#212121',
  },
});
