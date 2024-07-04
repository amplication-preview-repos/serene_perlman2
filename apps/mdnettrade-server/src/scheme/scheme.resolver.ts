import * as graphql from "@nestjs/graphql";
import { SchemeResolverBase } from "./base/scheme.resolver.base";
import { Scheme } from "./base/Scheme";
import { SchemeService } from "./scheme.service";

@graphql.Resolver(() => Scheme)
export class SchemeResolver extends SchemeResolverBase {
  constructor(protected readonly service: SchemeService) {
    super(service);
  }
}
