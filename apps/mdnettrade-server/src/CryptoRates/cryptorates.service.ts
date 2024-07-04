import { Injectable } from "@nestjs/common";
import { CryptoRatesOutput } from "../cryptoRates/CryptoRatesOutput";

@Injectable()
export class CryptoRatesService {
  constructor() {}
  async GetCryptoRates(args: string): Promise<CryptoRatesOutput> {
    throw new Error("Not implemented");
  }
}
