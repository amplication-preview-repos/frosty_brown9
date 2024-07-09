/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LeadService } from "../lead.service";
import { LeadCreateInput } from "./LeadCreateInput";
import { Lead } from "./Lead";
import { LeadFindManyArgs } from "./LeadFindManyArgs";
import { LeadWhereUniqueInput } from "./LeadWhereUniqueInput";
import { LeadUpdateInput } from "./LeadUpdateInput";

export class LeadControllerBase {
  constructor(protected readonly service: LeadService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lead })
  async createLead(@common.Body() data: LeadCreateInput): Promise<Lead> {
    return await this.service.createLead({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        company: true,
        status: true,
        source: true,
        customFields: true,
        rating: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Lead] })
  @ApiNestedQuery(LeadFindManyArgs)
  async leads(@common.Req() request: Request): Promise<Lead[]> {
    const args = plainToClass(LeadFindManyArgs, request.query);
    return this.service.leads({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        company: true,
        status: true,
        source: true,
        customFields: true,
        rating: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Lead })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async lead(
    @common.Param() params: LeadWhereUniqueInput
  ): Promise<Lead | null> {
    const result = await this.service.lead({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        company: true,
        status: true,
        source: true,
        customFields: true,
        rating: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Lead })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLead(
    @common.Param() params: LeadWhereUniqueInput,
    @common.Body() data: LeadUpdateInput
  ): Promise<Lead | null> {
    try {
      return await this.service.updateLead({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          company: true,
          status: true,
          source: true,
          customFields: true,
          rating: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Lead })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLead(
    @common.Param() params: LeadWhereUniqueInput
  ): Promise<Lead | null> {
    try {
      return await this.service.deleteLead({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          company: true,
          status: true,
          source: true,
          customFields: true,
          rating: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
