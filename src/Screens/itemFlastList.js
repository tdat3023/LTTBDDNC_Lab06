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
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function FlatItem({ item, props }) {
  return (
    <View style={styles.viewOne}>
      <TouchableOpacity>
        <View style={styles.itemBox}>
          <View style={styles.bodyContainer}>
            {/* tên */}
            <Text style={styles.textName}>{item.text}</Text>
            <Button title="Xóa"></Button>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  viewOne: {
    marginTop: 10,
    backgroundColor: "pink",
    width: 380,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  imaContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "gray",
    borderwidth: 4,
    justifyContent: "space-around",
    alignItems: "center",
  },

  textName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  itemBox: {
    width: "100%",
    height: 70,
    flexDirection: "row",
  },
});

export default FlatItem;
