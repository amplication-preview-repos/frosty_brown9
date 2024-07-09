import { Injectable } from "@nestjs/common";
import { ContactDto } from "../salesforceContactsSync/ContactDto";

@Injectable()
export class SalesforceContactsSyncService {
  constructor() {}
  async BulkSyncSalesforceContacts(args: ContactDto[]): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateSalesforceContact(args: ContactDto): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
  async DeleteSalesforceContact(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchSalesforceContacts(args: string): Promise<ContactDto[]> {
    throw new Error("Not implemented");
  }
  async UpdateSalesforceContact(args: ContactDto): Promise<ContactDto> {
    throw new Error("Not implemented");
  }
}
