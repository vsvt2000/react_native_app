import { fieldRequiredError } from "@stores/schema_stores/utility_store";
import * as z from "zod";

export const clinicCreateDoctorExperienceSchema = z.object({
  name: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Place of work is required here",
  }),
  noOfYears: z.number({
    required_error: fieldRequiredError,
    invalid_type_error: "Number is required here",
  }),
  location: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "City of work required here",
  }),
  pincode: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Pincode required here",
  }),
  remarks: z.string().optional(),
});

export const clinicCreateDoctorEducationSchema = z.object({
  name: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Place of work is required here",
  }),
  degree: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Degree is required here",
  }),
  institute: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Institute required here",
  }),
  yearOfPassing: z.number({
    required_error: fieldRequiredError,
    invalid_type_error: "City of work required here",
  }),
  remarks: z.string().optional(),
});
