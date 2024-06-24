import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MainHeader = ({ name, email }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <View style={Style.profileText}>
        <Text className="font-bold text-2xl">{name}</Text>
        <Text className="text-gray-500">{email}</Text>
      </View>

      <View className="bg-black rounded-full">
        <Image
          source={require("../../../assets/mockimages/Electronic/meta.png")}
          style={Style.profileImageHeader}
        />
      </View>
    </View>
  );
};

export default MainHeader;

const Style = StyleSheet.create({
  profileText: {
    gap: 3
  },
  profileImageHeader: {
    width: wp(10),
    height: wp(10),
    resizeMode: "cover",
    borderRadius: wp(10)
  }
});
