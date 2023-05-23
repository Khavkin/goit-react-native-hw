import { StyleSheet, Text } from 'react-native';

export const BoldText = ({ style, children }) => {
  return <Text style={{ ...styles.bold, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'RobotoBold',
    fontSize: 13,
    fontWeight: 700,
  },
});

export default BoldText;
