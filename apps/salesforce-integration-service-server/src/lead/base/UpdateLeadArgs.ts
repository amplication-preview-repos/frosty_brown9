/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeadWhereUniqueInput } from "./LeadWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LeadUpdateInput } from "./LeadUpdateInput";

@ArgsType()
class UpdateLeadArgs {
  @ApiProperty({
    required: true,
    type: () => LeadWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LeadWhereUniqueInput)
  @Field(() => LeadWhereUniqueInput, { nullable: false })
  where!: LeadWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LeadUpdateInput,
  })
  @ValidateNested()
  @Type(() => LeadUpdateInput)
  @Field(() => LeadUpdateInput, { nullable: false })
  data!: LeadUpdateInput;
}

export { UpdateLeadArgs as UpdateLeadArgs };
