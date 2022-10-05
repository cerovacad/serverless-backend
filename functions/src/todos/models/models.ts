export interface IToDo {
  title: string;
  desc: string;
  date: string;
  isDone: boolean;
}

export interface ICreateToDoRequest {
  title: string;
  desc: string;
}
