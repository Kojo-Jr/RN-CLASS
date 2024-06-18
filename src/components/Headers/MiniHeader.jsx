import { View, Text } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="font-bold" style={{ fontSize: wp(4.5) }}>
        {title}
      </Text>

      <Text className="text-gray-500 font-bold">{navigationText}</Text>
    </View>
  );
};

export default MiniHeader;
