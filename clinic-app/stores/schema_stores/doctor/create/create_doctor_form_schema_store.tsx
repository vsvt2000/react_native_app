import { fieldRequiredError } from "@stores/schema_stores/utility_store";
import * as z from "zod";
import {
  clinicCreateDoctorEducationSchema,
  clinicCreateDoctorExperienceSchema,
} from "./create_doctor_array_components_store";

export const clinicCreateDoctorSchemaStage1 = z.object({
  email: z
    .string({
      required_error: fieldRequiredError,
      invalid_type_error: "Email type is required here",
    })
    .email({
      message: "Email type is required here",
    }),
  name: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Name type is required here",
  }),
  registrationNumber: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Medical reg. is required here",
  }),
  phoneNumber: z
    .string({
      required_error: fieldRequiredError,
      invalid_type_error: "Number is required here",
    })
    .length(10, {
      message: "Phone number of length 10 required",
    })
    .transform(Number),
  specialization: z.string({
    required_error: fieldRequiredError,
    invalid_type_error: "Specialization required here",
  }),
});

export const clinicCreateDoctorSchemaStage2 = z.object({
  education: clinicCreateDoctorEducationSchema.array(),
});

export const clinicCreateDoctorSchemaStage3 = z.object({
  experiences: clinicCreateDoctorExperienceSchema.array(),
});
