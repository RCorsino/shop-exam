import React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/MainContainer";
import { Text, View } from "../components/Themed";

export default function MusicScreen() {
  return (
    <View style={styles.container}>
      <EditScreenInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
