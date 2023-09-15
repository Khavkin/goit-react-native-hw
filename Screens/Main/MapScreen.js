import { StyleSheet, Text, View } from "react-native";

export const MapScreen = () => {
  return <View style={styles.mapContainer}></View>;
};

const styles = StyleSheet.create({
  mapContainer: {
    // width: "100%",
    // heigth: "100%",
    backgroundColor: "#E8E8E8",
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
