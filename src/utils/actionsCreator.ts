import { TYPES } from "@shared/";
import { AnyAction } from "redux";

export interface IActions {
  [key: string]: { [key: string]: (payload?: Object, cb?: () => void, options?: Object) => AnyAction };
}

export const createActions = (aType: string[]): IActions => {
  const response: IActions = {};

  aType.forEach((aT) => {
    response[aT] = {};
    TYPES.forEach((t) => {
      response[aT][t] = (payload?: Object, cb?: () => void, options?: Object) => ({
        type: `${aT}_${t}`,
        payload,
        cb,
        options,
      });
    });
  });

  return response;
};
