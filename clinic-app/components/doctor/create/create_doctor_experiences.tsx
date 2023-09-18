import { ClinicCreateDoctorExperienceDetails } from "@doctypes/doctor/create/create_doctor_types";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button, View } from "react-native";
import CreateDoctorExperience from "./array_components/create_doctor_experience";
import ClinicButton from "@components/utilities/buttons/button";

function CreateDoctorExperiences() {
  const { control } = useForm<ClinicCreateDoctorExperienceDetails>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <View>
      {fields.map((field, index) => (
        <CreateDoctorExperience
          control={control}
          name={`experiences[${index}]`}
        />
      ))}
      <ClinicButton
        title="Add Experience"
        onPress={() =>
          append({
            name: "",
            noOfYears: 0,
            location: "",
            pincode: "0",
          })
        }
      />
    </View>
  );
}

export default CreateDoctorExperiences;
