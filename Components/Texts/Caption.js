import { StyleSheet, Text } from 'react-native';

export const Caption = ({ style, children }) => {
  return <Text style={{ ...styles.caption, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  caption: {
    fontFamily: 'RobotoMedium',
    fontSize: 17,
    fontWeight: 500,
    flex: 1,
    textAlign: 'center',
  },
});

export default Caption;
