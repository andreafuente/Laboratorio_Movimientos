import { AccountVm } from "@/pages/account-list";

export interface MovementVm {
  id: string;
  accountId: string;
  date: Date;
  realDate: Date;
  description: string;
  amount: string;
  balance: string;
}

export const createEmptyAccount = (): AccountVm => ({
  id: "",
  name: "",
  iban: "",
  balance: "",
  lastTransaction: new Date(),
});