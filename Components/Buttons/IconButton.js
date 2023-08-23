import { TouchableOpacity } from 'react-native';

export const IconButton = ({ icon, style, onPress, ...props }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ ...style }} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
