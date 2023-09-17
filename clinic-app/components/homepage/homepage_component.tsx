import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { getHomePageStyles } from "./homepage_constants";
import ClinicButton from "../utilities/buttons/button";

function HomePage() {
  return (
    <View style={getHomePageStyles()}>
      <Text>Welcome to The Clinic!</Text>
      <ClinicButton title={"Click here"} />
    </View>
  );
}

export default HomePage;
