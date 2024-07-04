import { Module } from "@nestjs/common";
import { CryptoRatesService } from "./cryptorates.service";
import { CryptoRatesController } from "./cryptorates.controller";
import { CryptoRatesResolver } from "./cryptorates.resolver";

@Module({
  controllers: [CryptoRatesController],
  providers: [CryptoRatesService, CryptoRatesResolver],
  exports: [CryptoRatesService],
})
export class CryptoRatesModule {}
