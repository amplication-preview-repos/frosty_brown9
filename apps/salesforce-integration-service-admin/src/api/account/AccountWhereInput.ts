import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AccountWhereInput = {
  id?: StringFilter;
  industry?: StringNullableFilter;
  description?: StringNullableFilter;
  phone?: StringNullableFilter;
  website?: StringNullableFilter;
  revenue?: FloatNullableFilter;
  numberOfEmployees?: IntNullableFilter;
  billingAddress?: JsonFilter;
  shippingAddress?: JsonFilter;
  customFields?: JsonFilter;
  name?: StringNullableFilter;
};
