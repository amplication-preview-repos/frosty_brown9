import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesforceContactsSyncService } from "./salesforcecontactssync.service";
import { ContactDto } from "../salesforceContactsSync/ContactDto";

@swagger.ApiTags("salesforceContactsSyncs")
@common.Controller("salesforceContactsSyncs")
export class SalesforceContactsSyncController {
  constructor(protected readonly service: SalesforceContactsSyncService) {}

  @common.Post("/contacts/bulk-sync")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BulkSyncSalesforceContacts(
    @common.Body()
    body: ContactDto
  ): Promise<string> {
        return this.service.BulkSyncSalesforceContacts(body);
      }

  @common.Post("/contacts")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSalesforceContact(
    @common.Body()
    body: ContactDto
  ): Promise<ContactDto> {
        return this.service.CreateSalesforceContact(body);
      }

  @common.Delete("/contacts/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteSalesforceContact(
    @common.Body()
    body: ContactDto
  ): Promise<string> {
        return this.service.DeleteSalesforceContact(body);
      }

  @common.Get("/contacts")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchSalesforceContacts(
    @common.Body()
    body: ContactDto
  ): Promise<ContactDto[]> {
        return this.service.FetchSalesforceContacts(body);
      }

  @common.Put("/contacts/:id")
  @swagger.ApiOkResponse({
    type: ContactDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSalesforceContact(
    @common.Body()
    body: ContactDto
  ): Promise<ContactDto> {
        return this.service.UpdateSalesforceContact(body);
      }
}
