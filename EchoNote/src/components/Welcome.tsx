import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Welcome back 👋</Text>

      <Text style={styles.description}>
        Capture your thoughts, memories and moments through your voice.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  description: {
    fontSize: 14,
    color: "#A1A1B5",
    marginTop: 8,
    lineHeight: 21,
  },
});