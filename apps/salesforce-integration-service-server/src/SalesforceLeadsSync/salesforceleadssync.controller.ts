import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SalesforceLeadsSyncService } from "./salesforceleadssync.service";
import { LeadDto } from "../salesforceLeadsSync/LeadDto";

@swagger.ApiTags("salesforceLeadsSyncs")
@common.Controller("salesforceLeadsSyncs")
export class SalesforceLeadsSyncController {
  constructor(protected readonly service: SalesforceLeadsSyncService) {}

  @common.Post("/leads/bulk-sync")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async BulkSyncSalesforceLeads(
    @common.Body()
    body: LeadDto
  ): Promise<string> {
        return this.service.BulkSyncSalesforceLeads(body);
      }

  @common.Post("/leads")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSalesforceLead(
    @common.Body()
    body: LeadDto
  ): Promise<LeadDto> {
        return this.service.CreateSalesforceLead(body);
      }

  @common.Get("/leads")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchSalesforceLeads(
    @common.Body()
    body: LeadDto
  ): Promise<LeadDto[]> {
        return this.service.FetchSalesforceLeads(body);
      }

  @common.Put("/leads/:id")
  @swagger.ApiOkResponse({
    type: LeadDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSalesforceLead(
    @common.Body()
    body: LeadDto
  ): Promise<LeadDto> {
        return this.service.UpdateSalesforceLead(body);
      }
}
