import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, UIStateTypes } from '../types/statesTypes';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: UIStateTypes = {
	isToShowSplash: true,
	isLoading: false,
};

const showLoaderReducer = (state: UIStateTypes, action: PayloadAction<boolean>): void => {
	state.isLoading = action.payload;
};

/**
 * show hide splash visivility reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const changeSplashVisibility = (state: UIStateTypes, action: PayloadAction<boolean>): void => {
	state.isToShowSplash = action?.payload ?? state.isToShowSplash;
};

/* UI slice*/
const uiSlice: any = createSlice({
	name: 'ui',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, isSplashShow: false };
		});
	},
	reducers: {
		showLoader: showLoaderReducer,
		updateSplashVisibility: changeSplashVisibility,
	},
});

// ACTIONS
const { showLoader, updateSplashVisibility } = uiSlice.actions;

// SELECTOR
const selectLoader = ({ ui }: MainStateTypes): boolean => ui?.isLoading ?? false;
const selectSplashVisibility = ({ ui }: MainStateTypes): boolean => ui?.isToShowSplash ?? false;

const uiSliceReducer = uiSlice.reducer;

export { showLoader, updateSplashVisibility, selectLoader, uiSliceReducer, selectSplashVisibility };
