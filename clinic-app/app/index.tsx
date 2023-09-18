import HomePage from "@components/homepage/homepage_component";
import { registerRootComponent } from "expo";
import { View } from "react-native";

export default function Home() {
  return (
    <View>
      <HomePage />
    </View>
  );
}

registerRootComponent(Home);
