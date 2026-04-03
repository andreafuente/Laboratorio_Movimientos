

export const formatBalanceNoDecimals = (balance: string): number =>
  Math.trunc(Number(balance));

export const isNegativeAmount = (amount: string): boolean => Number(amount) < 0;

