import { StyleSheet, View, FlatList, Image } from "react-native";
import BoldText from "../../Components/Texts/BoldText";
import RegularText from "../../Components/Texts/RegularText";
import { useAuth } from "../../Context/AuthContext";
import IconButton from "../../Components/Buttons/IconButton";
import Feather from "@expo/vector-icons/Feather";
import { useEffect } from "react";
import { posts } from "../../Data";

import Post from "./Post";

export const PostsScreen = ({ navigation }) => {
  // console.log(route.params);
  const { getUser, logOut } = useAuth();
  const user = getUser();
  const userPosts = posts.filter(post => post.userID === user.id);
  // console.log(user);

  useEffect(() => {
    navigation.setOptions({
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
        <View style={styles.userInfoWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={user?.avatar ? user.avatar : null}></Image>
          </View>
          <View style={styles.infoWrapper}>
            <BoldText>{user?.login}</BoldText>
            <RegularText>{user?.email}</RegularText>
          </View>
        </View>

        <FlatList
          style={styles.postsWrapper}
          data={userPosts}
          //renderItem={Post }
          renderItem={({ item }) => (
            <Post item={item} navigation={navigation} user={user} screen="posts" />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
  btnPlus: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoWrapper: {
    height: 124,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatar: { width: 60, height: 60 },
  infoWrapper: {},
  postsWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default PostsScreen;

{
  /* <Feather name="user" size={32} color="green" />
      <Feather name="grid" size={32} color="green" />
      <Feather name="log-out" size={32} color="green" />
      <Feather name="plus" size={32} color="green" />
      <Feather name="trash-2" size={32} color="green" /> */
}
