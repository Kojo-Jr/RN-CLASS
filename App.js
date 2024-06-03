import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        backgroundColor: "white",
        gap: 10,
        alignItems: "center"
      }}
    >
      
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
            height: 180,
            width: 180
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
            backgroundColor: "yellow",
            height: 180,
            width: 180
          }}
        >
          <Text
            style={{
              color: "black"
            }}
          >
            Hello Omari
          </Text>
        </View>
      </View>




      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            height: 180,
            width: 180
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
            backgroundColor: "yellow",
            height: 180,
            width: 180
          }}
        >
          <Text
            style={{
              color: "black"
            }}
          >
            Hello Omari
          </Text>
        </View>
      </View>
    </View>
  );
}
