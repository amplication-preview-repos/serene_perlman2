import { Module } from "@nestjs/common";
import { EmailVerificationService } from "./emailverification.service";
import { EmailVerificationController } from "./emailverification.controller";
import { EmailVerificationResolver } from "./emailverification.resolver";

@Module({
  controllers: [EmailVerificationController],
  providers: [EmailVerificationService, EmailVerificationResolver],
  exports: [EmailVerificationService],
})
export class EmailVerificationModule {}
