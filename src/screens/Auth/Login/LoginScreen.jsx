import { View, Text, TextInput, Button, Image, Linking } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import TextLink from "react-native-text-link";

const LoginScreen = () => {
  return (
    <View
      style={{
        // marginTop: wp(10),
        padding: wp(10),
        top: wp(10),
        // gap: wp(2),
        flex: 1
      }}
      className="bg-[#FAFAFA]"
    >
      <View
        style={{
          marginTop: wp(10)
        }}
      >
        <Text className="text-3xl font-bold text-blue-950">Jobizz</Text>
        <Text className="text-3xl font-bold top-2">Welcome Back</Text>
        <Text className="font-light top-3">Let's log in. Apply to jobs</Text>
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
              borderRadius: wp(2),
              backgroundColor: "white"
            }}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={{
              borderWidth: 0.5,
              padding: wp(3),
              width: wp("80%"),
              borderRadius: wp(2),
              backgroundColor: "white"
            }}
          />
        </View>
        <View
          style={{
            top: wp(30)
          }}
        >
          <Button title="Log In" color="#00308F" />
        </View>
      </View>

      <View
        style={{
          top: wp(50)
        }}
        className="flex-row items-center justify-center gap-2"
      >
        <View
          style={{
            width: wp(20),
            height: wp(0.2),
            backgroundColor: "black"
          }}
        />
        <Text className="text-sm">or continue with</Text>
        <View
          style={{
            width: wp(20),
            height: wp(0.2),
            backgroundColor: "black"
          }}
        />
      </View>

      <View
        style={{
          top: wp(55)
        }}
        className=" flex-1 flex-row justify-center"
      >
        <View className="bg-white w-10 h-10 p-7 rounded-full items-center justify-center">
          <Image
            style={{
              width: wp(8),
              height: wp(8),
              resizeMode: "contain"
            }}
            source={require("./assets/mockimages/Login/apple.png")}
          />
        </View>
        <View className="bg-white w-10 h-10 p-7 rounded-full items-center justify-center">
          <Image
            style={{
              width: wp(8),
              height: wp(8),
              resizeMode: "contain"
            }}
            source={require("./assets/mockimages/Login/google.png")}
          />
        </View>
        <View className="bg-white w-10 h-10 p-7 rounded-full items-center justify-center">
          <Image
            style={{
              width: wp(8),
              height: wp(8),
              resizeMode: "contain"
            }}
            source={require("./assets/mockimages/Login/facebook.png")}
          />
        </View>
      </View>

      <View
        style={{
          bottom: wp(20),
          alignItems: "center"
        }}
      >
        <Text>
          Don't have an account yet? Register
          {/* <Text> openURL={() => Linking.openURL()}Register</Text> */}
        </Text>
        {/* 
        <TextLink
          links={[
            {
              text: "Register",
              onPress: () => console.log(),
              style: { color: "blue" }
            }
          ]}
        >
          Don't have an account yet? Register
        </TextLink> */}
      </View>
    </View>
  );
};

export default LoginScreen;
