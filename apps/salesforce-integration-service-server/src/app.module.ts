import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";
import { LeadModule } from "./lead/lead.module";
import { AccountModule } from "./account/account.module";
import { SalesforceAccountsSyncModule } from "./SalesforceAccountsSync/salesforceaccountssync.module";
import { SalesforceContactsSyncModule } from "./SalesforceContactsSync/salesforcecontactssync.module";
import { SalesforceLeadsSyncModule } from "./SalesforceLeadsSync/salesforceleadssync.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ContactModule,
    LeadModule,
    AccountModule,
    SalesforceAccountsSyncModule,
    SalesforceContactsSyncModule,
    SalesforceLeadsSyncModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
