import { InvestmentUpdateManyWithoutSchemesInput } from "./InvestmentUpdateManyWithoutSchemesInput";

export type SchemeUpdateInput = {
  duration?: number | null;
  durationUnit?: "Option1" | null;
  fixedReturnPrice?: number | null;
  investments?: InvestmentUpdateManyWithoutSchemesInput;
  name?: string | null;
  price?: number | null;
  returnPercentage?: number | null;
};
