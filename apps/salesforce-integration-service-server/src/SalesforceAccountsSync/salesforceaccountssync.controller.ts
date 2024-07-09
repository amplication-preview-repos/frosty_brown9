import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesforceAccountsSyncService } from "./salesforceaccountssync.service";
import { AccountDto } from "../salesforceAccountsSync/AccountDto";

@swagger.ApiTags("salesforceAccountsSyncs")
@common.Controller("salesforceAccountsSyncs")
export class SalesforceAccountsSyncController {
  constructor(protected readonly service: SalesforceAccountsSyncService) {}

  @common.Post("/accounts/bulk-sync")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BulkSyncSalesforceAccounts(
    @common.Body()
    body: AccountDto
  ): Promise<string> {
        return this.service.BulkSyncSalesforceAccounts(body);
      }

  @common.Post("/accounts")
  @swagger.ApiOkResponse({
    type: AccountDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSalesforceAccount(
    @common.Body()
    body: AccountDto
  ): Promise<AccountDto> {
        return this.service.CreateSalesforceAccount(body);
      }

  @common.Get("/accounts")
  @swagger.ApiOkResponse({
    type: AccountDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchSalesforceAccounts(
    @common.Body()
    body: AccountDto
  ): Promise<AccountDto[]> {
        return this.service.FetchSalesforceAccounts(body);
      }

  @common.Put("/accounts/:id")
  @swagger.ApiOkResponse({
    type: AccountDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSalesforceAccount(
    @common.Body()
    body: AccountDto
  ): Promise<AccountDto> {
        return this.service.UpdateSalesforceAccount(body);
      }
}
