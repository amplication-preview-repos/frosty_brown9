import { JsonValue } from "type-fest";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  industry: string | null;
  description: string | null;
  phone: string | null;
  website: string | null;
  revenue: number | null;
  numberOfEmployees: number | null;
  billingAddress: JsonValue;
  shippingAddress: JsonValue;
  customFields: JsonValue;
  name: string | null;
};
