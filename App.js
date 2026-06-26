import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  if (Platform.OS === "web") {
    return (
      <View style={styles.container}>
        <iframe
          src="https://mydeepcalculator.netlify.app/"
          style={styles.iframe}
          title="Calculator"
        />
      </View>
    );
  }

  return (
    <WebView
      source={{ uri: "https://mydeepcalculator.netlify.app/" }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  iframe: {
    flex: 1,
    width: "100%",
    height: "100%",
    border: "none",
  },
});
