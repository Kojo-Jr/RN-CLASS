import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View className="flex flex-row items-center space-x-3">
      <View>
        <TextInput
          placeholder="Search a job or position"
          style={{
            backgroundColor: "#F2F2F3",
            padding: wp(4),
            borderRadius: 20,
            width: wp(77)
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: wp(4)
        }}
        className="bg-[#F2F2F3] rounded-full"
      >
        <MaterialIcons name="filter-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
