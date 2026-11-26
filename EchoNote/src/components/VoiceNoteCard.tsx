import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VoiceNoteCard() {
  return (
    <View style={styles.card}>
      {/* Recording information */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="mic-outline" size={22} color="#A78BFA" />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>My First Voice Note</Text>
          <Text style={styles.date}>26 Nov 2026 · 11:30 AM</Text>
        </View>

        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Waveform */}
      <View style={styles.waveform}>
        {[12, 20, 32, 18, 28, 38, 22, 14, 30, 20, 35, 16, 26, 12].map(
          (height, index) => (
            <View key={index} style={[styles.bar, { height }]} />
          )
        )}
      </View>

      {/* Duration */}
      <View style={styles.footer}>
        <Ionicons name="time-outline" size={15} color="#9292A8" />
        <Text style={styles.duration}>00:45</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1C2A",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#303147",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: "#302744",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },

  date: {
    color: "#9292A8",
    fontSize: 11,
    marginTop: 5,
  },

  playButton: {
    width: 38,
    height: 38,
    backgroundColor: "#7C3AED",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  waveform: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
    marginTop: 18,
    marginBottom: 12,
  },

  bar: {
    width: 4,
    backgroundColor: "#66518C",
    borderRadius: 5,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  duration: {
    fontSize: 12,
    color: "#9292A8",
  },
});