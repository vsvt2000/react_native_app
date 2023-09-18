import { CreateDoctorExperienceProps } from "@doctypes/doctor/create/create_doctor_types";
import React from "react";
import { useController } from "react-hook-form";
import { Text, View } from "react-native";

function CreateDoctorExperience(props: CreateDoctorExperienceProps) {
  const { control, name } = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}

export default CreateDoctorExperience;
