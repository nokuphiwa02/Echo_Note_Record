import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10111B",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
});