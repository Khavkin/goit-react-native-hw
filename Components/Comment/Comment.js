import { View, StyleSheet, Text, Image } from "react-native";
import getUser from "../../Utils/getUser";

const Comment = ({ comment, user }) => {
  const commentUser = getUser(comment.userID);
  const isOwnComment = commentUser.id === user.id;
  return (
    <View
      style={
        !isOwnComment
          ? styles.commentContainer
          : { ...styles.commentContainer, flexDirection: "row-reverse" }
      }
    >
      <Image source={commentUser?.avatar} style={styles.avatar}></Image>
      <View
        style={
          !isOwnComment
            ? { ...styles.messageContainer, borderTopLeftRadius: 0 }
            : { ...styles.messageContainer, borderTopRightRadius: 0 }
        }
      >
        <Text style={styles.commentText}>{comment.comment}</Text>
        <Text
          style={!isOwnComment ? styles.commentDate : { ...styles.commentDate, textAlign: "left" }}
        >
          {comment.date}
        </Text>
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
    flex: 1,
  },
  avatar: {
    borderRadius: 50,
    width: 28,
    height: 28,
  },
  messageContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    padding: 16,
    borderRadius: 6,

    flex: 1,
    //width: 350,
  },
  commentText: {
    fontFamily: "Roboto",
    fontSize: 13,
    color: "#212121",
    lineHeight: 18,
  },
  commentDate: {
    color: "#BDBDBD",
    fontSize: 10,
    fontFamily: "Roboto",
    textAlign: "right",
    marginTop: 8,
  },
});
