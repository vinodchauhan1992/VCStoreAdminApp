import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, ThemeStateStateTypes } from '../types/statesTypes';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: ThemeStateStateTypes = {
	isDark: null,
};

const saveSettingsThemeSchemeInfo = (
	state: ThemeStateStateTypes,
	action: PayloadAction<boolean>,
): void => {
	state.isDark = action.payload;
};

/* Theme state slice*/
const themeStateSlice: any = createSlice({
	name: 'themeState',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state };
		});
	},
	reducers: {
		saveSettingsThemeSchemeData: saveSettingsThemeSchemeInfo,
	},
});

// ACTIONS
const { saveSettingsThemeSchemeData } = themeStateSlice.actions;

// SELECTOR
const selectSettingsTheme = ({ themeState }: MainStateTypes): boolean =>
	themeState?.isDark ?? false;

const themeStateSliceReducer = themeStateSlice.reducer;

export { saveSettingsThemeSchemeData, themeStateSliceReducer, selectSettingsTheme };
