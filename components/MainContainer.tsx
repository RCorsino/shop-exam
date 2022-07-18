import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import _ from "lodash";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

import { Text, View } from "./Themed";
import MusicList from "./MusicList";

export default function EditScreenInfo() {
  const [text, setText] = useState("");
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [musicList, setMusicList] = useState({ results: [], resultCount: 0 });

  const onChangetext = (newText: string) => {
    setText(newText);
    fetchSongs();
  };

  const storeData = async (value: number) => {
    try {
      await AsyncStorage.setItem("musicsegment", JSON.stringify(value));
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    const getData = async () => {
      const segment = await AsyncStorage.getItem("musicsegment");
      setSegmentIndex(parseInt(segment || "0"));
    };

    // call the function
    getData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${text}`
      );
      const json = await response.json();
      setMusicList(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <View>
    <View style={styles.musicContainer}>
      <View
        style={styles.inputContainer}
        darkColor="rgba(255,255,255,0.05)"
        lightColor="rgba(0,0,0,0.05)"
      >
        <TextInput
          onChangeText={(newText) => onChangetext(newText)}
          value={text}
          style={{ padding: 10 }}
          editable
          maxLength={40}
          placeholder="Search Music"
        />
      </View>

      <View style={styles.segmentContainer}>
        <SegmentedControl
          values={["Album Name", "Release Date"]}
          selectedIndex={segmentIndex}
          onChange={(event) => {
            setSegmentIndex(event.nativeEvent.selectedSegmentIndex);
            storeData(event.nativeEvent.selectedSegmentIndex);
          }}
        />
      </View>
      <MusicList list={musicList} segmentIndex={segmentIndex} />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  musicContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  inputContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
    width: "90%",
  },
  segmentContainer: {
    width: "90%",
    marginVertical: 20,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
