import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";

const NewEventScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  });

  const handleAddEvent = async () => {
    const dateFormat = date.toISOString().slice(0, 10);
    const data = { name, description, date: dateFormat };
    const response = await fetch(
      "https://26eb-2402-800-61c3-da25-798b-cd75-7b23-3d66.ngrok-free.app/api/events/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    setAlert({ isVisible: true, msg: "Event Added" });
  };

  return (
    <View style={styles.screen}>
      {alert.isVisible && <Text>{alert.msg}</Text>}
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={date.toISOString()}
        onChangeText={setDate}
        placeholder="Date"
        style={styles.input}
      />
      <Button onPress={handleAddEvent} title="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});

export default NewEventScreen;
