import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  industry?: SortOrder;
  description?: SortOrder;
  phone?: SortOrder;
  website?: SortOrder;
  revenue?: SortOrder;
  numberOfEmployees?: SortOrder;
  billingAddress?: SortOrder;
  shippingAddress?: SortOrder;
  customFields?: SortOrder;
  name?: SortOrder;
};
