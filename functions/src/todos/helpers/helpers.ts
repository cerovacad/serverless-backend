import { ICreateToDoRequest, IToDo } from "../models/models";

export const createToDoRequest = (todo: ICreateToDoRequest): IToDo => {
  return { ...todo, date: Date.now().toString(), isDone: false };
};