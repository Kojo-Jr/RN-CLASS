import { View, Text, TextInput, Image, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { productData, allProduct } from "./src/mockData/products.data";

const App = () => {
  return (
    <View
      style={{ marginTop: wp(10), padding: wp(5) }}
      className="flex-1 space-y-5 bg-[#FAFAFA]"
    >
      {/* Header Section */}
      <View className="flex flex-row space-x-4 items-center">
        <View>
          <TextInput
            placeholder="Search for product..."
            autoCapitalize={true}
            keyboardType="email-address"
            style={{
              borderWidth: 1,
              borderColor: "white",
              padding: wp(3),
              borderRadius: wp(10),
              width: wp("70%"),
              backgroundColor: "white"
            }}
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{ padding: wp(4) }}
          className="bg-white rounded-full flex items-center justify-center"
        >
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
        <View
          style={{
            width: wp(6),
            height: wp(6)
          }}
          className="absolute top-0 right-0 items-center justify-center bg-red-600 rounded-full"
        >
          <Text
            style={{
              fontSize: wp(3),
              color: "white"
            }}
          >
            3
          </Text>
        </View>
      </View>

      {/* Banner Section */}
      <View className="flex flex-row">
        <View
          // style={{
          //   width: wp("90%"),
          //   height: wp("35%"),
          //   backgroundColor: "orange"
          // }}
          className="flex-1 items-end"
        >
          <Image
            source={require("./assets/mockimages/heels.jpeg")}
            style={{
              width: wp("90%"),
              height: wp("35%")
            }}
            className="rounded-3xl"
          />
          <Text
            style={{
              color: "white",
              position: "absolute",
              padding: wp(5)
            }}
          >
            <Text className="text-2xl">50%{"\n"}</Text>

            <Text style={{ fontSize: wp(9) }}>Discount{"\n"}</Text>
            <Text>Aug 21- 26</Text>
          </Text>
        </View>
      </View>
      <View className="flex items-center bottom-6">
        <Entypo name="dots-three-horizontal" size={24} color="orange" />
      </View>

      {/* Featured Section*/}
      <View className="space-y-2 bottom-5">
        <Text
          className="font-medium tracking-widest"
          style={{ fontSize: wp(6) }}
        >
          Featured
        </Text>
        <FlatList
          data={productData}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: wp(59),
                  width: wp(45)
                }}
                className="border bg-white border-white rounded-2xl"
              >
                <View className="bg-blue-100 flex items-center justify-center rounded-t-2xl">
                  <Image
                    style={{
                      resizeMode: "contain",
                      width: wp(53),
                      height: wp(40)
                    }}
                    source={item.image}
                  />
                </View>

                <View style={{ padding: wp(2), gap: wp(2) }}>
                  <Text className="font-medium text-lg">{item.name}</Text>

                  <View className="flex flex-row items-center justify-between">
                    <Text>{item.price}</Text>

                    <Feather name="heart" size={24} color="black" />
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, id) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={3}
          contentContainerStyle={{ gap: 25 }}
        />
      </View>

      {/*All Product Section */}
      <View>
        <View className="flex-row justify-between">
          <Text className="text-xl font-medium">All</Text>
          <Text>See All</Text>
        </View>
        <FlatList
          data={allProduct}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: wp(92),
                  height: wp(38)
                }}
                className="flex-row bg-white rounded-3xl "
              >
                <View>
                  <Image
                    style={{
                      height: wp(35),
                      width: wp(30)
                    }}
                    className="bg-orange-200 rounded-tl-3xl rounded-bl-3xl"
                    source={require("./assets/mockimages/adidas_shoe.png")}
                  />
                </View>

                <View // Name,description, price of all products
                  className="flex-row flex-1 justify-between p-3"
                >
                  <View style={{ gap: wp(2), marginRight: wp(2) }}>
                    <Text className="text-black font-semibold text-xl">
                      Adidas SuperCloud
                    </Text>
                    <Text className="text-xs">
                      Step into comfort and style{"\n"}with Adidas footwear-
                      performance
                      {"\n"}
                      redefined.
                    </Text>
                    <Text className="font-semibold text-lg">GHS 700</Text>
                  </View>
                  <View>
                    <Feather name="heart" size={24} color="black" />
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, id) => id}
          scrollEventThrottle={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 25 }}
        />
      </View>
    </View>
  );
};

export default App;
