import { InvestmentUpdateManyWithoutUsersInput } from "./InvestmentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  country?: string | null;
  currency?: "Option1" | null;
  email?: string | null;
  firstName?: string | null;
  investments?: InvestmentUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
