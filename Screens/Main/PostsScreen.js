import { StyleSheet, View, FlatList, Image } from 'react-native';
import BoldText from '../../Components/Texts/BoldText';
import RegularText from '../../Components/Texts/RegularText';

export const PostsScreen = ({ route }) => {
  //console.log(route);
  const { email, login } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.userInfoWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={null}></Image>
          </View>
          <View style={styles.infoWrapper}>
            <BoldText>{login}</BoldText>
            <RegularText>{email}</RegularText>
          </View>
        </View>

        <FlatList></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  main: { flex: 1 },
  footer: {
    height: 83,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    paddingTop: 9,
    paddingBottom: 34,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 39,
  },
  btnPlus: {
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoWrapper: {
    height: 124,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatar: { width: 60, height: 60 },
  infoWrapper: {},
});

export default PostsScreen;

{
  /* <Feather name="user" size={32} color="green" />
      <Feather name="grid" size={32} color="green" />
      <Feather name="log-out" size={32} color="green" />
      <Feather name="plus" size={32} color="green" />
      <Feather name="trash-2" size={32} color="green" /> */
}
