import { SchemeWhereUniqueInput } from "../scheme/SchemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvestmentCreateInput = {
  amountInvested?: number | null;
  endDate?: Date | null;
  scheme?: SchemeWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
