import { combineReducers } from '@reduxjs/toolkit';
import * as UI from './UI';
import * as LoginState from './LoginState';
import * as ThemeState from './ThemeState';
import * as SettingsOptions from './SettingsOptions';
import * as AdminMenusState from './AdminMenusState';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import config from '../config';
import { MainStateTypes } from '../types/statesTypes';

const rootReducer = combineReducers<any>({
	ui: UI.uiSliceReducer,
	loggedInUser: LoginState.loggedInUserSliceReducer,
	settingsOptions: SettingsOptions.settingsOptionsSliceReducer,
	adminMenu: AdminMenusState.adminMenuSliceReducer,
	themeState: ThemeState.themeStateSliceReducer,
});

export { rootReducer, UI, LoginState, ThemeState, SettingsOptions, AdminMenusState };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof config.store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
