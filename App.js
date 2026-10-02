import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <WebView
          source={{ uri: "https://mydeepcalculator.netlify.app/" }}
          style={styles.webview}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  webview: {
    flex: 1,
  },
  iframe: {
    flex: 1,
    width: "100%",
    height: "100%",
    border: "none",
  },
});
