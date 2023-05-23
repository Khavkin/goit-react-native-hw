import { TouchableOpacity } from 'react-native';

export const IconButton = ({ icon, style, onClick }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ ...style }} onPress={onClick}>
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
