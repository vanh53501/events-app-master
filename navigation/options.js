import { Ionicons } from "@expo/vector-icons";

export const navOptions = (nav) => {
  return {
    headerRight: () => (
      <Ionicons name="qr-code" size={25} onPress={() => nav.navigate("QR")} />
    ),
  };
};
