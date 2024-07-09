import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  company?: SortOrder;
  status?: SortOrder;
  source?: SortOrder;
  customFields?: SortOrder;
  rating?: SortOrder;
};
