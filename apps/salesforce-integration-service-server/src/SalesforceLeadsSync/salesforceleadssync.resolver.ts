import * as graphql from "@nestjs/graphql";
import { LeadDto } from "../salesforceLeadsSync/LeadDto";
import { SalesforceLeadsSyncService } from "./salesforceleadssync.service";

export class SalesforceLeadsSyncResolver {
  constructor(protected readonly service: SalesforceLeadsSyncService) {}

  @graphql.Mutation(() => String)
  async BulkSyncSalesforceLeads(
    @graphql.Args()
    args: LeadDto[]
  ): Promise<string> {
    return this.service.BulkSyncSalesforceLeads(args);
  }

  @graphql.Mutation(() => LeadDto)
  async CreateSalesforceLead(
    @graphql.Args()
    args: LeadDto
  ): Promise<LeadDto> {
    return this.service.CreateSalesforceLead(args);
  }

  @graphql.Query(() => [LeadDto])
  async FetchSalesforceLeads(
    @graphql.Args()
    args: string
  ): Promise<LeadDto[]> {
    return this.service.FetchSalesforceLeads(args);
  }

  @graphql.Mutation(() => LeadDto)
  async UpdateSalesforceLead(
    @graphql.Args()
    args: LeadDto
  ): Promise<LeadDto> {
    return this.service.UpdateSalesforceLead(args);
  }
}
