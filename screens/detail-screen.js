import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const DetailScreen = () => {
  const route = useRoute();
  const { id, name, description } = route.params;
  return (
    <View style={styles.screen}>
      <Text>Event Detail #{id}</Text>
      <Text>Event Title: {name}</Text>
      <Text>Event Description: {description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default DetailScreen;
