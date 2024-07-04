import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CryptoRatesService } from "./cryptorates.service";
import { CryptoRatesOutput } from "../cryptoRates/CryptoRatesOutput";

@swagger.ApiTags("cryptoRates")
@common.Controller("cryptoRates")
export class CryptoRatesController {
  constructor(protected readonly service: CryptoRatesService) {}

  @common.Get("/cryptorates")
  @swagger.ApiOkResponse({
    type: CryptoRatesOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCryptoRates(
    @common.Body()
    body: string
  ): Promise<CryptoRatesOutput> {
        return this.service.GetCryptoRates(body);
      }
}
