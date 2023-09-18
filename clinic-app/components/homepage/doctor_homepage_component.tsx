import React, { useEffect } from "react";
import { Text, View } from "react-native";
import ClinicButton from "@components/utilities/buttons/button";
import { Link } from "expo-router";
import { getHomePageStyles } from "@stores/constants/homepage_constants";

function DoctorHomePage() {
  return (
    <View style={getHomePageStyles()}>
      <Text>Welcome to The Clinic!</Text>
      <Link href="app/doctor/create">
        <ClinicButton title={"Register Into Portal"} />
      </Link>
    </View>
  );
}

export default DoctorHomePage;
