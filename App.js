import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // alignItems: "center",
          gap: 10
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 200,
            width: 200
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Hello Theo
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "black",
            height: 200,
            width: 200
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Hello Omari
          </Text>
        </View>
      </View>
    </View>
  );
}
