import * as apiModel from "../api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => ({
    id: movement.id,
    accountId: movement.accountId,
    date: new Date(movement.transaction),
    realDate: new Date(movement.realTransaction),
    description: movement.description,
    amount: String(movement.amount),
    balance: String(movement.balance),
  }));