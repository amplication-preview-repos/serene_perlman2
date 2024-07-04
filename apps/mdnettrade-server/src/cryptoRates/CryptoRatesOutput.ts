import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("CryptoRatesOutputObject")
class CryptoRatesOutput {
    @Field(() => GraphQLJSON)
    rates!: InputJsonValue;
}

export { CryptoRatesOutput as CryptoRatesOutput };