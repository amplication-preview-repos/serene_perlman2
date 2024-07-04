import { Module } from "@nestjs/common";
import { SchemeModuleBase } from "./base/scheme.module.base";
import { SchemeService } from "./scheme.service";
import { SchemeController } from "./scheme.controller";
import { SchemeResolver } from "./scheme.resolver";

@Module({
  imports: [SchemeModuleBase],
  controllers: [SchemeController],
  providers: [SchemeService, SchemeResolver],
  exports: [SchemeService],
})
export class SchemeModule {}
