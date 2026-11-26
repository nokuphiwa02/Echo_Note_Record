import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Welcome from "@/components/Welcome";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Welcome/>
      <SearchBar/>
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