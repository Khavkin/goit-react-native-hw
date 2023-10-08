import { BottomTabBarHeightContext, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import Feather from "@expo/vector-icons/Feather";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import IconButton from "../../Components/Buttons/IconButton";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Caption from "../../Components/Texts/Caption";
import { CreatePosts } from "./CreatePosts";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  //console.log(state.routes, state.index, state.routes[state.index].name);
  const icons = {
    Posts: "grid",
    CreatePosts: "plus",
    Profile: "user",
  };

  return (
    <View
      style={{
        flexDirection: "row",
        height: 83,
        backgroundColor: "#fff",

        borderTopWidth: state.routes[state.index].name === "CreatePosts" ? 0 : 1,
        borderColor: "rgba(0, 0, 0, 0.30)",
      }}
    >
      {state.routes[state.index].name === "CreatePosts" ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          key={state.routes[state.index].key}
        >
          <IconButton
            style={{
              width: 70,
              height: 40,
              backgroundColor: "#F6F6F6",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={<Feather name={"trash-2"} size={24} color="#BDBDBD" />}
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
                backgroundColor: "#FF6C00",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                width: 70,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              };

          const color = isFocused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={route.key}
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

const Home = ({ navigation, route }) => {
  //console.log(route.params);
  //const { email, login } = route.params;

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        // tabBarBackground: () => (
        //   <View
        //     style={{
        //       shadowOffset: { width: 1, height: 1 },
        //       shadowColor: "gray",
        //       shadowRadius: 1,
        //     }}
        //   />
        // ),

        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerStyle: {
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowColor: "black",
            shadowOpacity: 0.3,
            elevation: 3,
          },
        }}
      />
      <Tab.Screen
        name="CreatePosts"
        // component={CreatePostsScreen}
        component={CreatePosts}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

styles = StyleSheet.create({
  userMenu: {
    height: 88,
    paddingTop: 28,
    paddingRight: 19,
    paddingBottom: 12,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  caption: {
    color: "#212121",
  },
});

export default Home;
