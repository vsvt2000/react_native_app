import {
  clinicCreateDoctorSchemaStage1,
  clinicCreateDoctorSchemaStage2,
  clinicCreateDoctorSchemaStage3,
} from "@stores/schema_stores/doctor/create/create_doctor_form_schema_store";
import { Control } from "react-hook-form";
import * as z from "zod";

export type ClinicCreateDoctorGeneralDetails = z.infer<
  typeof clinicCreateDoctorSchemaStage1
>;
export type ClinicCreateDoctorEducationDetails = z.infer<
  typeof clinicCreateDoctorSchemaStage2
>;
export type ClinicCreateDoctorExperienceDetails = z.infer<
  typeof clinicCreateDoctorSchemaStage3
>;

export type CreateDoctorExperienceProps = {
  control: Control<ClinicCreateDoctorExperienceDetails>;
  name: string;
};
