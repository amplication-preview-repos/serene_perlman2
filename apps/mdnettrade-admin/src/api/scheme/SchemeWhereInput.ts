import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SchemeWhereInput = {
  duration?: IntNullableFilter;
  durationUnit?: "Option1";
  fixedReturnPrice?: FloatNullableFilter;
  id?: StringFilter;
  investments?: InvestmentListRelationFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  returnPercentage?: FloatNullableFilter;
};
