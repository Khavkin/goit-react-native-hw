import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const MainButton = ({ buttonText, style, onPress, ...props }) => {
  const { disabled = false } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.btnMain, ...style?.button }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...styles.btnMainText, ...style?.text }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnMain: {
    backgroundColor: '#FF6C00',
    height: 51,
    width: 343,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnMainText: {
    fontFamily: 'RobotoRegular',
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'none',
  },
});

export default MainButton;
