import {
  // Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import IconButton from "../../Components/Buttons/IconButton";
import RegularText from "../../Components/Texts/RegularText";
import Feather from "@expo/vector-icons/Feather";
import { FontAwesome } from "@expo/vector-icons";
import MainButton from "../../Components/Buttons/MainButton";
// import LocationInput from '../../Components/Inputs/LocationInput';
import { useEffect, useState } from "react";
import { usePosts } from "../../Context/PostsContext";

//const staticImage = require('../../Images/post1.jpg');

export const CreatePostsScreen = ({ navigation, params }) => {
  // const { image = null, location = null, title = null } = route.params;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  // console.log('CreatePostsScreen:', currentImage, currentLocation, currentName, image);

  const handleOnChangeLocation = location => {
    setCurrentLocation(location);
  };

  const handleOnImagePress = () => {
    const image = require("../../Images/post1.jpg");
    // setCurrentImage(Image.resolveAssetSource(image).uri);
    setCurrentImage(image);
    setCurrentLocation("Ivano-Frankivs'k Region, Ukraine");
    setCurrentTitle("Ліс");

    ///console.log('image press', currentImage);
  };

  const handleOnBackButton = () => {
    setCurrentImage(null);
    setCurrentTitle(null);
    setCurrentLocation(null);
    navigation.navigate("Posts");
  };

  const handleOnLocationClick = () => {
    navigation.navigate("MapScreen");
  };

  const isValid = () => {
    return currentImage && currentLocation && currentTitle;
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            icon={<Feather name="arrow-left" size={20} color="#BDBDBD" />}
            style={{ marginLeft: 16, width: 24, height: 24 }}
            onPress={handleOnBackButton}
          />
        );
      },
    });
  }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={currentImage} style={styles.image}></Image>
          <RegularText style={{ fontSize: 16, color: "#BDBDBD" }}>
            {currentImage ? "Редагувати фото" : "Завантажте фото"}
          </RegularText>
          <IconButton
            icon={
              <FontAwesome
                name={"camera"}
                size={24}
                style={{ color: currentImage ? "#FFF" : "#BDBDBD" }}
              />
            }
            style={{
              position: "absolute",
              width: 60,
              height: 60,
              left: "50%",
              top: "50%",
              transform: [{ translateX: -25 }, { translateY: -50 }],
              borderRadius: 50,
              backgroundColor: currentImage ? "rgba(255, 255, 255, 0.3)" : "#FFF",
              //              opacity: currentImage ? 0.3 : 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleOnImagePress}
          />
        </View>
        <TextInput
          placeholder="Назва..."
          style={{
            borderBottomColor: "#E8E8E8",
            borderBottomWidth: 1,
            marginTop: 32,
            height: 50,
            width: "100%",
          }}
          value={currentTitle}
          onChangeText={setCurrentTitle}
        />

        <View style={{ ...stylesLocation.locationInputWrapper }}>
          <IconButton
            icon={<Feather name={"map-pin"} size={24} style={{ color: "#BDBDBD" }} />}
            style={stylesLocation.btnShow}
            onPress={handleOnLocationClick}
          />
          <TextInput
            style={{ ...stylesLocation.input }}
            value={currentLocation}
            onChangeText={setCurrentLocation}
            placeholder="Місцевість..."
            caretHidden={true}
            editable={false}
          />
        </View>

        <MainButton
          buttonText="Опубліковати"
          style={{
            button: isValid()
              ? { marginTop: 32 }
              : { marginTop: 32, backgroundColor: styles.btnDisabled.backgroundColor },
            text: !isValid() ? { color: styles.btnDisabled.color } : {},
          }}
          onPress={() => {
            console.log("Опубліковати");
          }}
          disabled={!isValid()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageWrapper: {
    heigth: 267,
    width: "100%",
    backgroundColor: "#FFF",
    position: "relative",
    marginTop: 32,
  },
  image: {
    height: 240,
    width: "100%",
    // width: 343,
    borderRadius: 8,
    backgroundColor: "#E8E8E8",
  },
  button: {
    marginTop: 32,
  },
  btnDisabled: {
    backgroundColor: "#F6F6F6",
    color: "#BDBDBD",
  },
});

const stylesLocation = StyleSheet.create({
  locationInputWrapper: {
    flexDirection: "row",
    height: 50,

    width: "100%",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    // justifyContent: 'center',
    alignItems: "center",
  },
  input: {
    fontFamily: "RobotoRegular",

    flex: 1,
    color: "#212121",
  },
  btnShow: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
});

export default CreatePostsScreen;
