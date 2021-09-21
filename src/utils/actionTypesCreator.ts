import { TYPES } from "@shared/";

export interface IActionTypes {
  [key: string]: { [key: string]: string };
}

export const createActionTypes = (aType: string[]): IActionTypes => {
  const response: IActionTypes = {};

  aType.forEach((aT) => {
    response[aT] = {};
    TYPES.forEach((t) => {
      response[aT][t] = `${aT}_${t}`;
    });
  });

  return response;
};
