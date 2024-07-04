import { SortOrder } from "../../util/SortOrder";

export type SchemeOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  durationUnit?: SortOrder;
  fixedReturnPrice?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  returnPercentage?: SortOrder;
  updatedAt?: SortOrder;
};
