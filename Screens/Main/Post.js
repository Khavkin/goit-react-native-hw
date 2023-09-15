import * as React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import RegularText from "../../Components/Texts/RegularText";
import Feather from "@expo/vector-icons/Feather";
import IconButton from "../../Components/Buttons/IconButton";
//import { useNavigation } from "@react-navigation/native";

export const Post = ({ item, navigation, ...props }) => {
  //const navigation = useNavigation();

  console.log();

  const handleOnCommentClick = () => {
    navigation.navigate("CommentsScreen");
    //console.log("comments click");
  };
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image}></Image>
      <Text style={{ marginTop: 8, marginBottom: 8, color: "#212121", fontWeight: 500 }}>
        {item.title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.commentsWrapper}>
          <IconButton
            icon={<Feather name="message-circle" size={20} color="#BDBDBD" />}
            style={{ width: 24, height: 24 }}
            onPress={handleOnCommentClick}
          />
          <Text style={styles.commentsCount}>{item.comments.length}</Text>
        </View>
        <View style={stylesLocation.locationInputWrapper}>
          <IconButton
            icon={<Feather name={"map-pin"} size={20} style={{ color: "#BDBDBD" }} />}
            style={stylesLocation.btnShow}
          />
          <Text style={stylesLocation.input}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: { width: "100%", borderRadius: 8 },
  commentsWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  commentsCount: {
    fontFamily: "RobotoRegular",
    fontSize: 16,

    color: "#BDBDBD",
  },
});

const stylesLocation = StyleSheet.create({
  locationInputWrapper: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  input: {
    fontFamily: "RobotoRegular",
    fontSize: 16,

    color: "#212121",
    textDecorationLine: "underline",
    // borderBottomColor: "#212121",
    // borderBottomWidth: 1,
  },
  btnShow: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default Post;
