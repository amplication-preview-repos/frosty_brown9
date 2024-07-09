import { Injectable } from "@nestjs/common";
import { LeadDto } from "../salesforceLeadsSync/LeadDto";

@Injectable()
export class SalesforceLeadsSyncService {
  constructor() {}
  async BulkSyncSalesforceLeads(args: LeadDto[]): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateSalesforceLead(args: LeadDto): Promise<LeadDto> {
    throw new Error("Not implemented");
  }
  async FetchSalesforceLeads(args: string): Promise<LeadDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateSalesforceLead(args: LeadDto): Promise<LeadDto> {
    throw new Error("Not implemented");
  }
}
