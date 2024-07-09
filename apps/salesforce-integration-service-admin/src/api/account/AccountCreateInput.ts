import { InputJsonValue } from "../../types";

export type AccountCreateInput = {
  industry?: string | null;
  description?: string | null;
  phone?: string | null;
  website?: string | null;
  revenue?: number | null;
  numberOfEmployees?: number | null;
  billingAddress?: InputJsonValue;
  shippingAddress?: InputJsonValue;
  customFields?: InputJsonValue;
  name?: string | null;
};
