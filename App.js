import { Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function App() {
  const App = () => {
    const height = 200;
    const width = 200;

  };
  return (

    <View // Main View
      style={{
        flex: 1,
        marginTop: 50,
        backgroundColor: "white",
        gap: 10,
        alignItems: "center"
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "12%"
        }}
      >
        <View>
          <AntDesign name="github" size={24} color="black" />
        </View>

        <View>
          <FontAwesome name="facebook" size={24} color="black" />
        </View>
      </View>

      <View>
        <Image
          source={require("./assets/mockimages/p_cat2.png")}
          // source={{
          // uri: "https://reactnative.dev/docs/assets/p_cat2.png"
          // }}

          style={{ width: 140, height: 140, resizeMode: "contain" }}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // alignItems: "center",
          gap: 10
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 180,
            width: 180,
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Hello Theo
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            height: 180,
            width: 180
          }}
        >
          <Text
            style={{
              color: "black"
            }}
          >
            Hello Omari
          </Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 180,
            width: 180
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Hello Theo
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            height: 180,
            width: 180,
          }}
        >
          <Text
            style={{
              color: "black"
            }}
          >
            Hello Omari
          </Text>
        </View>
      </View>
    </View>
  );
}
