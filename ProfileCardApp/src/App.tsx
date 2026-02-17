import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const App = () => {
  return (
    <ImageBackground
      source={require("./bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay for readability */}
      <View style={styles.overlay}>
        {/* Profile Card */}
        <View style={styles.card}>
          {/* Avatar */}
          <Image
            source={require("./Avatar.jpg")}
            style={styles.avatar}
          />

          {/* Name & Role */}
          <Text style={styles.name}>SreeVidya</Text>
          <Text style={styles.role}>React Native Developer</Text>

          {/* Contact Info */}
          <View style={styles.infoSection}>
            <View style={styles.contactRow}>
              <Text style={styles.icon}>📧</Text>
              <Text style={styles.infoText}>sree@email.com</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.icon}>📞</Text>
              <Text style={styles.infoText}>+91 9876543210</Text>
            </View>
          </View>

          {/* Bio */}
          <Text style={styles.bio}>
            Passionate React Native developer focused on building clean,
            user-friendly mobile applications.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.85, // responsive
    backgroundColor: "rgba(255,255,255,0.92)",
    borderRadius: 18,
    padding: 22,
    alignItems: "center",
    elevation: 6,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4a90e2",
    marginBottom: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
  },
  role: {
    fontSize: 14,
    color: "#666",
    marginBottom: 14,
    letterSpacing: 0.5,
  },
  infoSection: {
    marginBottom: 12,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#333",
  },
  bio: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 10,
    paddingHorizontal: 8,
  },
});

export default App;
