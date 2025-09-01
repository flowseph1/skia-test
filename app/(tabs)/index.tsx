import Hexagon from "@/components/hexagon";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";

const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, flexDirection: "row" }}>
        <ThemedView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <Hexagon
              key={index}
              hexagonSize={50}
              fillPercentage={randomNumber()}
              cornerRadius={2.5}
              iconWidth={20}
              iconHeight={20}
              strokeWidth={4}
              activeColor={["#6CE625"]}
              fillColor={["#489919", "#46bb04"]}
              borderColor={["#6CE625", "#30E6FF"]}
            />
          ))}
        </ThemedView>
        <ThemedView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {Array.from({ length: 50 }).map((_, index) => (
            <Hexagon
              key={index}
              hexagonSize={50}
              fillPercentage={randomNumber()}
              cornerRadius={2.5}
              iconWidth={20}
              iconHeight={20}
              strokeWidth={4}
              activeColor={["#6CE625"]}
              fillColor={["#489919", "#46bb04"]}
              borderColor={["#6CE625", "#30E6FF"]}
            />
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}
