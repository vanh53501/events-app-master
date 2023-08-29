import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EventItem = ({ id, name, description, qrCode }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Info", { id, name, description })}
    >
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Image style={{ width: 100, height: 100 }} source={{ uri: qrCode }} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#c5c5c5",
    borderRadius: 10,
    margin: 5,
    padding: 15,
    justifyContent: "center",
  },
});

export default EventItem;
