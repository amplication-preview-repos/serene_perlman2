import { InvestmentCreateNestedManyWithoutUsersInput } from "./InvestmentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  country?: string | null;
  currency?: "Option1" | null;
  email?: string | null;
  firstName?: string | null;
  investments?: InvestmentCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: InputJsonValue;
  username: string;
};
