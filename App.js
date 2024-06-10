import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

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
              fontSize: wp(3)
            }}
          >
            3
          </Text>
        </View>
      </View>
      {/* Banner Section */}

      {/* Featured Section*/}

      {/*All Product Section */}
    </View>
  );
};

export default App;
