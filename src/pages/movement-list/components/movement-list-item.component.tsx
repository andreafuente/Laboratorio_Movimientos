import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list-item.component.module.css";
import { formatBalanceNoDecimals, isNegativeAmount } from "@/helpers";

interface Props {
  movementItem: MovementVm;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  const movementAmountClass = `${classes.dataCell} ${classes.alignRight} ${
    isNegativeAmount(movementItem.amount) ? classes.negative : ""
  }`;

  const movementBalanceClass = `${classes.dataCell} ${classes.alignRight} ${
    isNegativeAmount(movementItem.balance) ? classes.negative : ""
  }`;
  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movementItem.date.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.realDate.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span className={movementAmountClass}>
        {formatBalanceNoDecimals(movementItem.amount)}€
      </span>
      <span className={movementBalanceClass}>
        {formatBalanceNoDecimals(movementItem.balance)}€
      </span>
    </div>
  );
};
