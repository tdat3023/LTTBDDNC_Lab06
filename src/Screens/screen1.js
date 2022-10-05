import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect, useRef } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  RefreshControl,
  TextInput,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FlatItem from "./itemFlastList";

export default Screen1 = function ({ props }) {
  const [newValue, setNewValue] = useState("");
  const [id, setId] = useState(1);
  const [data, setData] = useState([
    {
      id: 1,
      text: "Test",
    },
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.headerUp}>
            <Ionicons name="arrow-back" size={35} color="black" />
            <Text style={styles.textBtn}>Chat</Text>
            <AntDesign name="shoppingcart" size={35} color="black" />
          </View>
          <View style={styles.headerDown}>
            <Text>Nhập vào để thêm vào List</Text>
          </View>
        </View>
        {/* Body */}
        <View style={styles.bodyList}>
          {/* Text input */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={newValue}
              onChangeText={(val) => {
                setNewValue(val);
              }}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setData([...data, { id: id + 1, text: newValue }]);
                setNewValue("");
                setId(id + 1);
              }}
            >
              <Text>Thêm</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => <FlatItem item={item}></FlatItem>}
          ></FlatList>
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.headerUp}>
            <Ionicons name="arrow-back" size={35} color="black" />
            <AntDesign name="home" size={35} color="black" />
            <Ionicons name="md-return-up-back-sharp" size={35} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    height: 100,
    flexDirection: "column",
  },

  headerUp: {
    height: 50,
    backgroundColor: "blue",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  headerDown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },

  topTag: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  inputView: {
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 40,
    width: 80,
    padding: 10,
  },

  bodyList: {
    flex: 1,
    alignItems: "center",
  },

  footer: {
    height: 60,
    backgroundColor: "blue",
    justifyContent: "center",
  },
});
