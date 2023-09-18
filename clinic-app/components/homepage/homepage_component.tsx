import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { getHomePageStyles } from "../../stores/constants/homepage_constants";
import ClinicButton from "@components/utilities/buttons/button";
import { Link, Navigator } from "expo-router";

function HomePage() {
  return (
    <View style={getHomePageStyles()}>
      <Text>Welcome to The Clinic!</Text>
      <Link href={"creatcswnjz"} asChild>
        <Pressable>
          <ClinicButton title={"Doctor's Portal"} />
        </Pressable>
      </Link>
    </View>
  );
}

export default HomePage;
