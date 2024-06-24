import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <View className="flex flex-row items-center space-x-3">
      <View>
        <TextInput
          placeholder="Search a job or position"
          style={Styles.textInput}
        />
      </View>

      <TouchableOpacity
        style={Styles.touchableOpacity}
        className="bg-[#F2F2F3] rounded-full"
      >
        <MaterialIcons name="filter-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;

const Styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#F2F2F3",
    padding: wp(4),
    borderRadius: 20,
    width: wp(77)
  },
  touchableOpacity: {
    padding: wp(4)
  }
});
