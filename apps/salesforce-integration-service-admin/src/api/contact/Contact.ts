import { JsonValue } from "type-fest";

export type Contact = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  leadStatus?: "Option1" | null;
  jobTitle: string | null;
  department: string | null;
  birthdate: Date | null;
  description: string | null;
  customFields: JsonValue;
};
