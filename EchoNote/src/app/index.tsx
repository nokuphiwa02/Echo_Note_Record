
import { View, StyleSheet, ScrollView } from "react-native";
import Home from "../app/home";

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Home/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10111B",
  },

  scrollView: {
    gap: 15,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
});
