import { View, StyleSheet, Button } from "react-native";
import EventList from "../components/events/event-list";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigation = useNavigation();

  const handleRefresh = () => {
    console.log("Refreshing");
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const response = await fetch(
      "https://26eb-2402-800-61c3-da25-798b-cd75-7b23-3d66.ngrok-free.app/api/events/"
    );
    const data = await response.json();
    setData(data);
  };

  return (
    <View style={styles.screen}>
      <EventList data={data} onRefresh={handleRefresh} />
      <Button onPress={() => navigation.navigate("New")} title="Add New Event" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;
