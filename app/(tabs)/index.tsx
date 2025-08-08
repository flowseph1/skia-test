import Hexagon from "@/components/hexagon";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <Hexagon
            key={index}
            hexagonSize={50}
            fillPercentage={100}
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
    </ScrollView>
  );
}
