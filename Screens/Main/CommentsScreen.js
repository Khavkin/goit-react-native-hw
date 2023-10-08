import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";

import IconButton from "../../Components/Buttons/IconButton";
import Feather from "@expo/vector-icons/Feather";
import Comment from "../../Components/Comment/Comment";

export const CommentsScreen = ({ ...props }) => {
  const navigation = useNavigation();
  const { user, message } = props.route.params;
  // const routesLength = useNavigationState(state => state.routes.length);
  // const prevScreenName =
  //   routesLength > 1 ? useNavigationState(state => state.routes[state.index - 1].name) : "";

  // console.log("Prev screen", prevScreenName);

  const handleOnBackButton = () => {
    //console.log(navigation.getParent());
    navigation.goBack();
    //navigation.navigate("Posts");
  };

  useEffect(() => {
    navigation.setOptions({
      title: "Коментарі",
      headerLeft: () => {
        return (
          <IconButton
            icon={<Feather name="arrow-left" size={20} color="#BDBDBD" />}
            style={{ marginLeft: 16, width: 24, height: 24 }}
            onPress={handleOnBackButton}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Image source={message.image} style={styles.image} />
        <FlatList
          // style={{ flex: 1 }}
          data={message.comments}
          renderItem={({ item }) => <Comment comment={item} user={user} />}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={styles.footer}>
        <TextInput placeholder="Коментувати..." style={{ flex: 1 }} />
        <IconButton
          icon={<Feather name="arrow-up" size={20} style={{ color: "#FFFFFF" }} />}
          style={{
            width: 34,
            height: 34,

            borderRadius: 50,
            backgroundColor: "#FF6C00",

            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
  },
  image: { width: "100%", borderRadius: 8, marginTop: 16, marginBottom: 32 },

  footer: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 8,
    alignItems: "center",
  },
});

export default CommentsScreen;
