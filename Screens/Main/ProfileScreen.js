import { StyleSheet, View, FlatList, Image, Text, Dimensions } from "react-native";
import BoldText from "../../Components/Texts/BoldText";
import RegularText from "../../Components/Texts/RegularText";
import { useAuth } from "../../Context/AuthContext";
import IconButton from "../../Components/Buttons/IconButton";
import Feather from "@expo/vector-icons/Feather";
import { useEffect } from "react";
import { posts } from "../../Data";

import Post from "./Post";

export const ProfileScreen = ({ navigation }) => {
  // console.log(route.params);
  const { getUser, logOut } = useAuth();
  const user = getUser();
  // console.log(user);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle />,
      headerRight: () => {
        return (
          <IconButton
            icon={<Feather name="log-out" size={20} color="#BDBDBD" />}
            style={{ marginRight: 16, width: 24, height: 24 }}
            onPress={logOut}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={user?.avatar ? user.avatar : null}></Image>
        </View>
        <View style={styles.userInfoWrapper}>
          <View style={styles.infoWrapper}>
            <BoldText style={{ marginVertical: 32, fontSize: 30 }}>{user?.login}</BoldText>
          </View>
        </View>

        <FlatList
          style={styles.postsWrapper}
          data={posts}
          renderItem={({ item }) => <Post item={item} navigation={navigation} user={user} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 147,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  main: { flex: 1 },
  footer: {
    height: 83,
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    paddingTop: 9,
    paddingBottom: 34,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 39,
  },

  userInfoWrapper: {
    marginTop: 32,
    alignItems: "center",
    fontSize: 30,
  },
  avatarWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    left: Dimensions.get("window").width / 2 - 60,
    top: -60,
    overflow: "hidden",
  },
  avatar: { width: 120, height: 120 },
  infoWrapper: {},
  postsWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default ProfileScreen;

{
  /* <Feather name="user" size={32} color="green" />
      <Feather name="grid" size={32} color="green" />
      <Feather name="log-out" size={32} color="green" />
      <Feather name="plus" size={32} color="green" />
      <Feather name="trash-2" size={32} color="green" /> */
}
