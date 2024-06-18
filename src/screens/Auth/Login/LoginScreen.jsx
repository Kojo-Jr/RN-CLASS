import { View, Text, TextInput, Button, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const App = () => {
  return (
    <View
      style={{
        marginTop: wp(10),
        padding: wp(10),
        top: wp(10)
      }}
    >
      <View>
        <Text className="text-2xl font-bold text-blue-950">Jobizz</Text>
        <Text className="text-2xl font-bold top-2">Welcome Back</Text>
        <Text className="font-extralight top-3">
          Let's log in. Apply to jobs
        </Text>
      </View>

      <View>
        <View
          style={{
            top: wp(20),
            gap: wp(5)
          }}
        >
          <TextInput
            placeholder="Name"
            style={{
              borderWidth: 0.5,
              padding: wp(3),
              width: wp("80%"),
              borderRadius: wp(2)
            }}
          />
          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 0.5,
              padding: wp(3),
              width: wp("80%"),
              borderRadius: wp(2)
            }}
          />
        </View>
      </View>

      <View
        style={{
          top: wp(30)
        }}
      >
        <Button title="Log In" />
      </View>

      <View
        style={{
          top: wp(50)
        }}
        className="items-center"
      >
        <Text className="text-sm">or continue with</Text>
      </View>

      <View>
        <View className="">
          <Image
            style={{
              width: wp(10),
              height: wp(10)
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default App;
