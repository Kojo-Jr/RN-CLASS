import { Text, View, Image, FlatList } from "react-native";
import React from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { categoriesData } from "./__mockData/category.data";

export default function App() {
  console.log(categoriesData);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        backgroundColor: "black",
        padding: 10
      }}
    >
      <FlatList
        data={categoriesData}
        renderItem={(category) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 25,
                width: 155,
                height: 167,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image source={category.item.image} />

              <Text style={{ color: "black" }}>{category.item.title}</Text>
            </View>
          );
        }}
        keyExtractor={(category) => category.id}
        numColumns={2}
        contentContainerStyle={{ gap: 20, marginHorizontal: 20 }}
      />
    </View>
  );
}
