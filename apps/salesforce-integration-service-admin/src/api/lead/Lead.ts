import { JsonValue } from "type-fest";

export type Lead = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  company: string | null;
  status?: "Option1" | null;
  source?: "Option1" | null;
  customFields: JsonValue;
  rating?: "Option1" | null;
};
