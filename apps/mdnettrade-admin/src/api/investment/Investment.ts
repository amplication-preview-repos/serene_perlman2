import { Scheme } from "../scheme/Scheme";
import { User } from "../user/User";

export type Investment = {
  amountInvested: number | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  scheme?: Scheme | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
