import { Module } from "@nestjs/common";
import { SalesforceLeadsSyncService } from "./salesforceleadssync.service";
import { SalesforceLeadsSyncController } from "./salesforceleadssync.controller";
import { SalesforceLeadsSyncResolver } from "./salesforceleadssync.resolver";

@Module({
  controllers: [SalesforceLeadsSyncController],
  providers: [SalesforceLeadsSyncService, SalesforceLeadsSyncResolver],
  exports: [SalesforceLeadsSyncService],
})
export class SalesforceLeadsSyncModule {}
