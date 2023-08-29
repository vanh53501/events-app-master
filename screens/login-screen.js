import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        // Validate the username and password.
        // Login the user.

    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(username) => setUsername(username)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate("App")}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default LoginScreen;