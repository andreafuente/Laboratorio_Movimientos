import * as apiModel from "../api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

describe("mapMovementListFromApiToVm", () => {
  it("should map from api model to vm model", () => {

    //Given
    const apiMovementList: apiModel.Movement[] = [
      {
        id: "1",
        description: "Movimiento 1",
        amount: -100,
        balance: 900,
        transaction: "2023-01-01",
        realTransaction: "2023-01-01",
        accountId: "1",
      },
    ];

    //When
    const vmMovementList = mapMovementListFromApiToVm(apiMovementList);

    //Then
    expect(vmMovementList).toEqual([
      {
        id: "1",
        accountId: "1",
        date: new Date("2023-01-01"),
        realDate: new Date("2023-01-01"),
        description: "Movimiento 1",
        amount: "-100",
        balance: "900",
      },
    ]);
  });


it("should return empty array when it feeds empty array", () => {
   
    //Given
    const apiMovementList: apiModel.Movement[] = [];

    //When
    const vmMovementList = mapMovementListFromApiToVm(apiMovementList);

    //Then
    expect(vmMovementList).toEqual([]);

});
});
