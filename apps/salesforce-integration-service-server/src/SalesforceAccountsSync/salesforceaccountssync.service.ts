import { Injectable } from "@nestjs/common";
import { AccountDto } from "../salesforceAccountsSync/AccountDto";

@Injectable()
export class SalesforceAccountsSyncService {
  constructor() {}
  async BulkSyncSalesforceAccounts(args: AccountDto[]): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateSalesforceAccount(args: AccountDto): Promise<AccountDto> {
    throw new Error("Not implemented");
  }
  async FetchSalesforceAccounts(args: string): Promise<AccountDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateSalesforceAccount(args: AccountDto): Promise<AccountDto> {
    throw new Error("Not implemented");
  }
}
