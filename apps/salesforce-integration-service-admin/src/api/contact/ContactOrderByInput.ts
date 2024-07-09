import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  leadStatus?: SortOrder;
  jobTitle?: SortOrder;
  department?: SortOrder;
  birthdate?: SortOrder;
  description?: SortOrder;
  customFields?: SortOrder;
};
