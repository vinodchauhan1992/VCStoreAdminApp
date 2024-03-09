import { createSlice, createAction, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AdminMenuStateModel, MainStateTypes } from '../types/statesTypes';
import { AdminMenuModel } from '../model/AdminMenuModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: AdminMenuStateModel = {
	adminMenuData: null,
};

/**
 * save user info reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const saveAdminMenuInfo = (
	state: AdminMenuStateModel,
	action: PayloadAction<AdminMenuModel>,
): any => {
	state.adminMenuData = action?.payload;
};

/* Admin menu slice*/
const adminMenuSlice: any = createSlice({
	name: 'adminMenu',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state };
		});
	},
	reducers: { saveAdminMenu: saveAdminMenuInfo },
});

// ACTIONS
const { saveAdminMenu } = adminMenuSlice.actions;

// SELECTOR STATES
const selectAdminMenuData = (state: MainStateTypes) => state.adminMenu;

// CREATE SELECTOR
const selectAdminMenuDataSelector = createSelector([selectAdminMenuData], (adminMenu) => {
	return adminMenu?.adminMenuData ?? null;
});
const selectAdminMenusDataArraySelector = createSelector([selectAdminMenuData], (adminMenu) => {
	return adminMenu?.adminMenuData?.data ?? [];
});

const adminMenuSliceReducer = adminMenuSlice.reducer;

export {
	adminMenuSliceReducer,
	saveAdminMenu,
	selectAdminMenuDataSelector,
	selectAdminMenusDataArraySelector,
	signOutAction,
};
