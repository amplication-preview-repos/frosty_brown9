import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LeadWhereInput = {
  id?: StringFilter;
  company?: StringNullableFilter;
  status?: "Option1";
  source?: "Option1";
  customFields?: JsonFilter;
  rating?: "Option1";
};
