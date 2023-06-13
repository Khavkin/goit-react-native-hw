import { StyleSheet, View, FlatList, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import IconButton from '../../../Components/Buttons/IconButton';
import Caption from '../../../Components/Texts/Caption';
import BoldText from '../../../Components/Texts/BoldText';
import RegularText from '../../../Components/Texts/RegularText';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userMenu}>
        <Caption style={styles.caption}>Публикации</Caption>
        <IconButton icon={<Feather name="log-out" size={20} color="#BDBDBD" />} />
      </View>
      <View style={styles.main}>
        <View style={styles.userInfoWrapper}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatar} source={null}></Image>
          </View>
          <View style={styles.infoWrapper}>
            <BoldText>Natali Romanova</BoldText>
            <RegularText>email@example.com</RegularText>
          </View>
        </View>

        <FlatList></FlatList>
      </View>

      {/* <View style={styles.footer}>
       
        <IconButton
               icon={
                  <Feather
                   name="grid"
                    size={24}
                    color="#212121"
       
                  />
                 }
              />
              <IconButton
               style={styles.btnPlus}
               icon={
                 <Feather
                   name="plus"
                  size={20}
                  color="#FFFFFF"
                 />
               }
             />
             <IconButton
               icon={
                <Feather
                   name="user"
                  size={24}
                  color="#212121"
                 />
               }
        />
        
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userMenu: {
    height: 88,
    paddingTop: 28,
    paddingRight: 19,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
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
  caption: {
    color: '#212121',
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
