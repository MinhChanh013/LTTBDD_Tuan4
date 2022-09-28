import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

// image
import blueImage from "./assets/blue.png";
import star from "./assets/tar.png";
import question from "./assets/question.png";
import React from "react";

export default function Main({ navigation, route }) {
  const [imagePhone, setImagePhone] = React.useState();
  React.useEffect(() => {
    if (route.params) {
      const { imagePhone } = route.params;
      setImagePhone(imagePhone);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 20,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "90%", height: "90%" }}
          source={!imagePhone ? blueImage : imagePhone}
        ></Image>
      </View>
      <View
        style={{
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          flex: 0.6,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600" }}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View
          style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
            <Image source={star}></Image>
          </View>
          <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: "600" }}>
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View
          style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700" }}>1.790.000 đ</Text>
          <Text style={{ marginLeft: 30, fontSize: 14 }}>1.790.000 đ</Text>
        </View>
        <View
          style={{ marginTop: 15, flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700", color: "red" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image style={{ marginLeft: 5 }} source={question}></Image>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderWidth: 1,
              borderRadius: 20,
              position: "relative",
            }}
            onPress={() => {
              navigation.navigate("Option", {
                imagePhone: imagePhone,
              });
            }}
          >
            <Text style={{ fontSize: 15 }}>4 MÀU-CHỌN MÀU</Text>
            <Text
              style={{
                position: "absolute",
                right: 20,
                fontSize: 25,
                fontWeight: "300",
                top: 1,
              }}
            >
              {">"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          flex: 0.15,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
            borderRadius: 10,
            position: "relative",
            backgroundColor: "red",
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "700", color: "#fff" }}>
            CHỌN MUA
          </Text>
        </TouchableOpacity>
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
