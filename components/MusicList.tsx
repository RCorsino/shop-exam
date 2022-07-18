// @ts-nocheck
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import _ from "lodash";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

interface IMusicDataProps {
  resultCount: number;
  results: any;
}

interface IMusicListProps {
  list: IMusicDataProps;
  segmentIndex: number;
}

const MusicList = ({ list, segmentIndex }: IMusicListProps) => {
  const navigation = useNavigation();
  let data = list?.results;

  if (segmentIndex === 0) {
    data = _.groupBy(data, "collectionName");
  }

  if (segmentIndex === 1) {
    data = _.groupBy(data, "releaseDate");
  }

  const dataValyes = Object.values(data);

  const renderItem = ({ item, index }: any | undefined) => {
    return (
      <TouchableOpacity
        key={item[0].collectionId}
        style={styles.itemContainer}
        onPress={() => navigation.navigate("Album", { item })}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item[0].artworkUrl100,
          }}
        />
        {segmentIndex === 0 ? (
          <Text>{item[0].collectionName}</Text>
        ) : (
          <Text>{moment(item[0].releaseDate).format("LL")}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataValyes}
        renderItem={renderItem}
        keyExtractor={(item: any) => item[0].collectionId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemContainer: {
    flex: 2,
    flexDirection: "row",
    width: "90%",
    padding: 12,
    alignItems: "center",
    backgroundColor: "#eee",
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: "center",
  },
});

export default MusicList;
