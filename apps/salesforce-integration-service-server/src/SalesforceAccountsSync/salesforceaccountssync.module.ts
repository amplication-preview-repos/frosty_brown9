import { Module } from "@nestjs/common";
import { SalesforceAccountsSyncService } from "./salesforceaccountssync.service";
import { SalesforceAccountsSyncController } from "./salesforceaccountssync.controller";
import { SalesforceAccountsSyncResolver } from "./salesforceaccountssync.resolver";

@Module({
  controllers: [SalesforceAccountsSyncController],
  providers: [SalesforceAccountsSyncService, SalesforceAccountsSyncResolver],
  exports: [SalesforceAccountsSyncService],
})
export class SalesforceAccountsSyncModule {}
