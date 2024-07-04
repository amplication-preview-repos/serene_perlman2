import * as graphql from "@nestjs/graphql";
import { SendOtpInput } from "../emailVerification/SendOtpInput";
import { EmailVerificationService } from "./emailverification.service";

export class EmailVerificationResolver {
  constructor(protected readonly service: EmailVerificationService) {}

  @graphql.Mutation(() => String)
  async SendOtp(
    @graphql.Args()
    args: SendOtpInput
  ): Promise<string> {
    return this.service.SendOtp(args);
  }
}
