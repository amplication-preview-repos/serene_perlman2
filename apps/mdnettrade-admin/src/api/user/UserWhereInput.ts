import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvestmentListRelationFilter } from "../investment/InvestmentListRelationFilter";

export type UserWhereInput = {
  country?: StringNullableFilter;
  currency?: "Option1";
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  investments?: InvestmentListRelationFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
