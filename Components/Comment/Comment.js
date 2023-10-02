import { View, StyleSheet, Text, Image } from "react-native";
import getUser from "../../Utils/getUser";

const Comment = ({ comment, user }) => {
  const commentUser = getUser(comment.userID);
  return (
    <View style={styles.commentContainer}>
      <Image source={commentUser?.avatar} style={styles.avatar}></Image>
      <View style={styles.messageContainer}>
        <Text style={styles.commentText}>{comment.comment}</Text>
        <Text>{comment.date}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
    alignItems: "flex-start",
    width: 200,
  },
  avatar: {
    borderRadius: 50,
    width: 28,
    height: 28,
  },
  messageContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 16,
    borderRadius: 8,
    //width: 350,
  },
  commentText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#212121",
    lineHeight: 18,
  },
});
