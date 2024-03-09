import { Action } from 'redux';

export interface ActionReducer<T, V extends Action = Action> {
	(state: T, action: V): T;
}
