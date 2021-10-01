import { Action } from '@ngrx/store';
import { UserAdd } from '../models/users.model';

export enum UserActionTypes  {
  //add
  ADD_USER = '[USER] ADD',
  //delete
  DELETE_USER = '[USER] DELETE',
}
export class AddUserAction implements Action {
  readonly type = UserActionTypes.ADD_USER;
  constructor(public payload : UserAdd) {}
}
export class DeleteUserAction implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public payload : string) {}
}

export type UserActions = AddUserAction | DeleteUserAction;
