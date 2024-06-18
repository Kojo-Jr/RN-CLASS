import { View, Text, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SmallCards = ({ company, companyimage, jobtitle, salary, location }) => {
  return (
    <View
      style={{
        marginTop: wp(3)
      }}
    >
      <View className="bg-white flex-row items-center rounded-3xl p-4">
        <Image
          style={{
            resizeMode: "contain",
            width: wp(12),
            height: wp(12)
          }}
          className="bg-white rounded-3xl"
          source={companyimage}
        />
        <View
          style={{ padding: wp(2) }}
          className="flex-row flex-1 justify-between"
        >
          <View>
            <Text className="font-bold text-lg">{jobtitle}</Text>
            <Text>{company}</Text>
          </View>
          <View>
            <Text
              style={{ marginRight: wp(5) }}
              className="font-bold text-base"
            >
              {salary}
            </Text>
            <Text>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SmallCards;
