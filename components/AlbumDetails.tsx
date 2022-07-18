import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Image, Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function AlbumDetails({ item, navigation }: any) {
  const renderItem = ({ item, index }: any) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text>{item.trackName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.albumContainer}>
        <Image
          style={styles.artwork}
          source={{
            uri: item[0].artworkUrl100,
          }}
        />
        <View style={styles.artistContainer}>
          <Text style={styles.albumtext}>{item[0].collectionName}</Text>
          <Text style={styles.artistText}>{item[0].artistName}</Text>
        </View>
      </View>
      <Text style={styles.subHeaderText}>Songs</Text>
      <View style={styles.flatListContainer}>
        <FlatList
          data={item}
          renderItem={renderItem}
          keyExtractor={(item) => item.trackId}
        />
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  albumContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  artwork: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
  artistContainer: {
    flex: 1,
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  artistText: {
    fontSize: 15,
  },
  albumtext: {
    fontSize: 20,
  },
  text: {
    color: "black",
  },
  subHeaderText: {
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 20,
  },
  flatListContainer: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  itemContainer: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
