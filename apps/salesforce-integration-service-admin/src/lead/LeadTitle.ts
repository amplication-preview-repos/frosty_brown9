import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "company";

export const LeadTitle = (record: TLead): string => {
  return record.company?.toString() || String(record.id);
};
