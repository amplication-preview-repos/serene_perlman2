import { Investment } from "../investment/Investment";

export type Scheme = {
  createdAt: Date;
  duration: number | null;
  durationUnit?: "Option1" | null;
  fixedReturnPrice: number | null;
  id: string;
  investments?: Array<Investment>;
  name: string | null;
  price: number | null;
  returnPercentage: number | null;
  updatedAt: Date;
};
