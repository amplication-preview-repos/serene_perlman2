import { SortOrder } from "../../util/SortOrder";

export type InvestmentOrderByInput = {
  amountInvested?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  schemeId?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
