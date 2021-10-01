import { UserAdd } from './users.model';

export interface AppState {
  readonly users: Array<UserAdd>
}
