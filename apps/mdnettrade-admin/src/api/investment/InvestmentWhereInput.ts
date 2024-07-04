import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvestmentWhereInput = {
  amountInvested?: FloatNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  scheme?: SchemeWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
