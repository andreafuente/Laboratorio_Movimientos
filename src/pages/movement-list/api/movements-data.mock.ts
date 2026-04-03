import { AccountVm } from "@/pages/account-list";
import { MovementVm } from "../components/movement-list.vm";

export const mockAccount: AccountVm = {
  id: "1",
  name: "Cuenta nómina",
  iban: "ES66 1234 1234 12 1234567890",
  balance: "1204.10",
  lastTransaction: new Date("2026-03-03T10:00:00"),
};

export const mockMovementList: MovementVm[] = [
  {
    id: "1",
    accountId: "1",
    date: new Date("2026-03-01T10:00:00"),
    realDate: new Date("2026-03-01T10:05:00"),
    description: "Pago suministros",
    amount: "-45.90",
    balance: "1204.10",
  },
  {
    id: "2",
    accountId: "1",
    date: new Date("2026-03-02T09:00:00"),
    realDate: new Date("2026-03-02T09:00:00"),
    description: "Ingreso nómina",
    amount: "1500.00",
    balance: "2704.10",
  },
];