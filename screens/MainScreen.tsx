import React from "react";
import { StyleSheet } from "react-native";

import MainContainer from "../components/MainContainer";
import { View } from "../components/Themed";

export default function MusicScreen() {
  return (
    <View style={styles.container}>
      <MainContainer />
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
});
