import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, SafeAreaView } from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <Button title="Sign Out" onPress={() => navigation.popToTop()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    screen: {
      padding: 20,
    },
  });

export default ProfileScreen;
