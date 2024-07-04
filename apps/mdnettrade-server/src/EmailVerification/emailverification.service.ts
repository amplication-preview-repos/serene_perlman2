import { Injectable } from "@nestjs/common";
import { SendOtpInput } from "../emailVerification/SendOtpInput";

@Injectable()
export class EmailVerificationService {
  constructor() {}
  async SendOtp(args: SendOtpInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
