import { Investment } from "../investment/Investment";
import { JsonValue } from "type-fest";

export type User = {
  country: string | null;
  createdAt: Date;
  currency?: "Option1" | null;
  email: string | null;
  firstName: string | null;
  id: string;
  investments?: Array<Investment>;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
