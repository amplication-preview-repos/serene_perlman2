import * as graphql from "@nestjs/graphql";
import { CryptoRatesOutput } from "../cryptoRates/CryptoRatesOutput";
import { CryptoRatesService } from "./cryptorates.service";

export class CryptoRatesResolver {
  constructor(protected readonly service: CryptoRatesService) {}

  @graphql.Query(() => CryptoRatesOutput)
  async GetCryptoRates(
    @graphql.Args()
    args: string
  ): Promise<CryptoRatesOutput> {
    return this.service.GetCryptoRates(args);
  }
}
