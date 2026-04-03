import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "@/pages/account-list";
import { createEmptyAccount, MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
//import { mockAccount, mockMovementList } from "../api/movements-data.mock"; -- se ha eliminado porque se ha implementado la llamada a la api real pero se ha dejado el código comentado por si se quiere volver a usar el mock para pruebas.
import { MovementListTableComponent } from "./movement-list-table.component";
import { formatBalanceNoDecimals, isNegativeAmount } from "@/helpers";
import { getMovementList } from "../api";
import { useParams } from "react-router-dom";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { getAccountList } from "@/pages/account-list/api";
import { mapAccountListFromApiToVm } from "@/pages/account-list/account-list.mapper";

export const MovementListPage: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccount());
  const [movements, setMovements] = React.useState<MovementVm[]>([]);

  const { id } = useParams();

  React.useEffect(() => {
    if (!id) return;

    getMovementList(id).then((movements) => {
      setMovements(mapMovementListFromApiToVm(movements));
    });

    getAccountList().then((accounts) => {
      const accountVm = mapAccountListFromApiToVm(accounts).find(
        (account) => account.id === id,
      );

      if (accountVm) {
        setAccount(accountVm);
      }
    });
  }, [id]);

  const accountBalanceClass = `${classes.balanceStyle} ${
    isNegativeAmount(account.balance) ? classes.negative : ""
  }`;

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldo y Últimos movimientos</h1>
          <p>
            Saldo disponible:
            <span className={accountBalanceClass}>
              {formatBalanceNoDecimals(account.balance)}€
            </span>
          </p>
        </div>
        <div className={classes.accountInfoContainer}>
          <p>Alias: {account.name}</p>
          <p>IBAN: {account.iban}</p>
        </div>

        <MovementListTableComponent movementList={movements} />
      </div>
    </AppLayout>
  );
};
