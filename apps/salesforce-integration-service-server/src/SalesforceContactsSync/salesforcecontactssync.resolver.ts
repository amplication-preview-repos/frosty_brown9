import * as graphql from "@nestjs/graphql";
import { ContactDto } from "../salesforceContactsSync/ContactDto";
import { SalesforceContactsSyncService } from "./salesforcecontactssync.service";

export class SalesforceContactsSyncResolver {
  constructor(protected readonly service: SalesforceContactsSyncService) {}

  @graphql.Mutation(() => String)
  async BulkSyncSalesforceContacts(
    @graphql.Args()
    args: ContactDto[]
  ): Promise<string> {
    return this.service.BulkSyncSalesforceContacts(args);
  }

  @graphql.Mutation(() => ContactDto)
  async CreateSalesforceContact(
    @graphql.Args()
    args: ContactDto
  ): Promise<ContactDto> {
    return this.service.CreateSalesforceContact(args);
  }

  @graphql.Mutation(() => String)
  async DeleteSalesforceContact(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteSalesforceContact(args);
  }

  @graphql.Query(() => [ContactDto])
  async FetchSalesforceContacts(
    @graphql.Args()
    args: string
  ): Promise<ContactDto[]> {
    return this.service.FetchSalesforceContacts(args);
  }

  @graphql.Mutation(() => ContactDto)
  async UpdateSalesforceContact(
    @graphql.Args()
    args: ContactDto
  ): Promise<ContactDto> {
    return this.service.UpdateSalesforceContact(args);
  }
}
