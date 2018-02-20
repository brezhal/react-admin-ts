import * as Counter from './Counter';
import * as Login from './Account/Login';

export interface ApplicationState {
  counter: Counter.CounterState;
  login: Login.LoginState;
}

export const reducers = {
  counter: Counter.reducer,
  login: Login.reducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
