import { View, Text, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const BigCards = ({
  company,
  companyImage,
  jobTitle,
  salary,
  location,
  backgroundColor
}) => {
  return (
    <View
      className=" rounded-2xl h-full"
      style={{
        width: wp(75),
        height: wp(50),
        margin: wp(3),
        padding: wp(3),
        backgroundColor: backgroundColor
      }}
    >
      <View className="flex flex-row items-center space-x-6">
        <View className="bg-white p-2 rounded-full">
          <Image
            source={companyImage}
            style={{
              width: wp(10),
              height: wp(10),
              resizeMode: "contain"
            }}
          />
        </View>
        <View style={{ gap: wp(1) }}>
          <Text className="font-bold text-white text-xl">{jobTitle}</Text>
          <Text className="text-white">{company}</Text>
        </View>
      </View>

      <View className="flex flex-row justify-between w-full absolute bottom-4 p-4">
        <Text className="font-bold text-lg text-white">{salary}</Text>

        <Text className="font-bold text-lg text-white">{location}</Text>
      </View>
    </View>
  );
};

export default BigCards;
