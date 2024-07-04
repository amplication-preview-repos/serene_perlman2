import { InvestmentCreateNestedManyWithoutSchemesInput } from "./InvestmentCreateNestedManyWithoutSchemesInput";

export type SchemeCreateInput = {
  duration?: number | null;
  durationUnit?: "Option1" | null;
  fixedReturnPrice?: number | null;
  investments?: InvestmentCreateNestedManyWithoutSchemesInput;
  name?: string | null;
  price?: number | null;
  returnPercentage?: number | null;
};
