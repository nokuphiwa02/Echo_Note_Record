import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#A78BFA" />

      <TextInput
        style={styles.input}
        placeholder="Search your recordings..."
        placeholderTextColor="#77778D"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: "#1B1C2A",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#303147",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
  },
});