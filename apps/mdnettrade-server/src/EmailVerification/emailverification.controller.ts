import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EmailVerificationService } from "./emailverification.service";
import { SendOtpInput } from "../emailVerification/SendOtpInput";

@swagger.ApiTags("emailVerifications")
@common.Controller("emailVerifications")
export class EmailVerificationController {
  constructor(protected readonly service: EmailVerificationService) {}

  @common.Post("/send-otp")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendOtp(
    @common.Body()
    body: SendOtpInput
  ): Promise<string> {
        return this.service.SendOtp(body);
      }
}
