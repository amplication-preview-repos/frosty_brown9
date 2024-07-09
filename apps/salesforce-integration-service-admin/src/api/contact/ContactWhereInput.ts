import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ContactWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  leadStatus?: "Option1";
  jobTitle?: StringNullableFilter;
  department?: StringNullableFilter;
  birthdate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  customFields?: JsonFilter;
};
