import { InputJsonValue } from "../../types";

export type ContactUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  leadStatus?: "Option1" | null;
  jobTitle?: string | null;
  department?: string | null;
  birthdate?: Date | null;
  description?: string | null;
  customFields?: InputJsonValue;
};
