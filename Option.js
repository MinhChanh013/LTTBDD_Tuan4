import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
} from "react-native";

import blueImage from "./assets/blue.png";
import blackImage from "./assets/black.png";
import redImage from "./assets/red.png";
import whiteImage from "./assets/white.png";

export default function Option({ navigation, route }) {
  const [imagePhone, setImagePhone] = useState();
  React.useEffect(() => {
    if (route.params) {
      const { imagePhone } = route.params;
      setImagePhone(imagePhone);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.3, overflow: "hidden", flexDirection: "row" }}>
        <Image
          style={{ marginLeft: 0, width: 135, height: 180 }}
          source={!imagePhone ? blueImage : imagePhone}
        ></Image>
        <Text
          style={{
            marginLeft: 20,
            maxWidth: 230,
            marginTop: 10,
            fontWeight: "700",
            fontSize: 15,
          }}
        >
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "#C4C4C4",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 10 }}>
          Chọn một màu bên dưới:
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#C5F1FB",
              marginBottom: 20,
              marginTop: 20,
            }}
            onPress={() => {
              setImagePhone(whiteImage);
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              marginBottom: 20,
            }}
            onPress={() => {
              setImagePhone(redImage);
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#000000",
              marginBottom: 20,
            }}
            onPress={() => {
              setImagePhone(blackImage);
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#234896",
              marginBottom: 20,
            }}
            onPress={() => {
              setImagePhone(blueImage);
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 10,
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
              backgroundColor: "#1952E294",
            }}
            onPress={() =>
              navigation.navigate("Main", {
                imagePhone: imagePhone,
              })
            }
          >
            <Text style={{ fontSize: 18, fontWeight: "600", color: "#Fff" }}>
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
