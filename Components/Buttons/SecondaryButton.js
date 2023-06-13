import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const SecondaryButton = ({ buttonText, style, onPress }) => {
  //console.log(buttonText, onClick);
  return (
    <TouchableOpacity style={{ ...styles.btnSecondary, ...style?.button }} onPress={onPress}>
      <Text style={{ ...styles.btnSecondaryText, ...style?.text }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnSecondary: {},
  btnSecondaryText: {
    fontFamily: 'RobotoRegular',
    color: '#1B4371',
    fontSize: 16,
    textTransform: 'none',
  },
});

export default SecondaryButton;
