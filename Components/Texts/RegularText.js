import { StyleSheet, Text } from 'react-native';

export const RegularText = ({ style, children }) => {
  return <Text style={{ ...styles.regular, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'RobotoRegular',
    fontSize: 11,
    fontWeight: 400,
  },
});

export default RegularText;
