import * as graphql from "@nestjs/graphql";
import { AccountDto } from "../salesforceAccountsSync/AccountDto";
import { SalesforceAccountsSyncService } from "./salesforceaccountssync.service";

export class SalesforceAccountsSyncResolver {
  constructor(protected readonly service: SalesforceAccountsSyncService) {}

  @graphql.Mutation(() => String)
  async BulkSyncSalesforceAccounts(
    @graphql.Args()
    args: AccountDto[]
  ): Promise<string> {
    return this.service.BulkSyncSalesforceAccounts(args);
  }

  @graphql.Mutation(() => AccountDto)
  async CreateSalesforceAccount(
    @graphql.Args()
    args: AccountDto
  ): Promise<AccountDto> {
    return this.service.CreateSalesforceAccount(args);
  }

  @graphql.Query(() => [AccountDto])
  async FetchSalesforceAccounts(
    @graphql.Args()
    args: string
  ): Promise<AccountDto[]> {
    return this.service.FetchSalesforceAccounts(args);
  }

  @graphql.Mutation(() => AccountDto)
  async UpdateSalesforceAccount(
    @graphql.Args()
    args: AccountDto
  ): Promise<AccountDto> {
    return this.service.UpdateSalesforceAccount(args);
  }
}
