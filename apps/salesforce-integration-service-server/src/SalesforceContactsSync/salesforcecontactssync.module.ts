import { Module } from "@nestjs/common";
import { SalesforceContactsSyncService } from "./salesforcecontactssync.service";
import { SalesforceContactsSyncController } from "./salesforcecontactssync.controller";
import { SalesforceContactsSyncResolver } from "./salesforcecontactssync.resolver";

@Module({
  controllers: [SalesforceContactsSyncController],
  providers: [SalesforceContactsSyncService, SalesforceContactsSyncResolver],
  exports: [SalesforceContactsSyncService],
})
export class SalesforceContactsSyncModule {}
