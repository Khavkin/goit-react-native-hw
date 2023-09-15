import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import IconButton from "../../Components/Buttons/IconButton";
import Feather from "@expo/vector-icons/Feather";

export const CommentsScreen = () => {
  const navigation = useNavigation();
  console.log("comments screen");

  const handleOnBackButton = () => {
    navigation.navigate("Posts");
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
      <Text>It's a Comments Screen</Text>
      <FlatList></FlatList>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 50,
    width: "100%",
    backgroundColor: "#0000FF",
  },
});

export default CommentsScreen;
