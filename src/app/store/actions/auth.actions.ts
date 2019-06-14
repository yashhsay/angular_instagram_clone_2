import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum AuthActionTypes {
  LoginUser = '[Auth] Login',
  SetAuths = '[Auth] Set Auths'
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;
  constructor(public payload: User) {}
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: User) {}
}


export type AuthActions = LoginUser | SetAuths;
