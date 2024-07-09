import { InputJsonValue } from "../../types";

export type LeadUpdateInput = {
  company?: string | null;
  status?: "Option1" | null;
  source?: "Option1" | null;
  customFields?: InputJsonValue;
  rating?: "Option1" | null;
};
