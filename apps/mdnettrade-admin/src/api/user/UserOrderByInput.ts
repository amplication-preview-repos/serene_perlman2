import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
