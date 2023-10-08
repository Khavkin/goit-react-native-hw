import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import IconButton from "../../Components/Buttons/IconButton";
import SvgComponent from "../../Components/SvgComponent/SvgComponent";

const Post = ({ item, navigation, user, screen, ...props }) => {
  //  console.log(item.comments.length);
  // const tmpStyles =
  //   screen === "profile"
  //     ? { commentsCount: { ...styles.commentsCount }, commenstCount: { color: "#212121" } }
  //     : { commentsCount: { ...styles.commentsCount } };
  // console.log(tmpStyles);

  const handleOnCommentClick = () => {
    navigation.navigate("CommentsScreen", { user, message: item });
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image}></Image>
      <Text style={{ marginTop: 8, marginBottom: 8, color: "#212121", fontWeight: 500 }}>
        {item.title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 24 }}>
          <View style={styles.commentsWrapper}>
            <IconButton
              icon={
                screen === "profile" ? (
                  <SvgComponent fill="#FF6C00" stroke="#FF6C00" />
                ) : (
                  <SvgComponent />
                )
              }
              style={{ width: 24, height: 24 }}
              onPress={handleOnCommentClick}
            />
            <Text
              style={
                screen === "profile"
                  ? { ...styles.commentsCount, color: "#212121" }
                  : styles.commentsCount
              }
            >
              {item.comments.length}
            </Text>
          </View>
          {screen === "profile" && (
            <View style={styles.commentsWrapper}>
              <IconButton
                icon={<Feather name="thumbs-up" size={20} color="#FF6C00" />}
                style={{ width: 24, height: 24 }}
                onPress={null}
              />
              <Text
                style={
                  screen === "profile"
                    ? { ...styles.commentsCount, color: "#212121" }
                    : styles.commentsCount
                }
              >
                {item.likes}
              </Text>
            </View>
          )}
        </View>

        <View style={stylesLocation.locationInputWrapper}>
          <IconButton
            icon={<Feather name={"map-pin"} size={20} style={{ color: "#BDBDBD" }} />}
            style={stylesLocation.btnShow}
          />
          <Text style={stylesLocation.input}>
            {screen === "profile"
              ? item.location.country
              : item.location.region + ", " + item.location.country}
          </Text>
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
    //flex: 1,
    justifyContent: "flex-start",
    gap: 6,
  },
  commentsCount: {
    fontFamily: "RobotoRegular",
    fontSize: 16,

    color: "#BDBDBD",
  },
  profileComments: {
    color: "#FF6C00",
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
