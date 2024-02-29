import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../model/UserModel';
import { MainStateTypes, SettingsOptionsStateTypes, UserStateTypes } from '../types/statesTypes';
import { SettingsModel } from '../model/SettingsModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: SettingsOptionsStateTypes = {
	settingsData: [],
};

/**
 * save user info reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const saveSettingsInfo = (
	state: SettingsOptionsStateTypes,
	action: PayloadAction<SettingsModel[]>,
): any => {
	state.settingsData = action?.payload;
};

/* User slice*/
const settingsOptionsSlice: any = createSlice({
	name: 'settingsOptions',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, settingsData: [] };
		});
	},
	reducers: { saveSettingsData: saveSettingsInfo },
});

// ACTIONS
const { saveSettingsData } = settingsOptionsSlice.actions;

// SELECTOR
const selectSettingsData = (state: MainStateTypes) => state?.settingsOptions?.settingsData ?? null;

const settingsOptionsSliceReducer = settingsOptionsSlice.reducer;

export { settingsOptionsSliceReducer, saveSettingsData, selectSettingsData, signOutAction };
