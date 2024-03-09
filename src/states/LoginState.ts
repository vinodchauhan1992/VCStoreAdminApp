import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { LoggedInUserStateModel, MainStateTypes } from '../types/statesTypes';
import { LoggedInUserModel } from '../model/LoggedInUserModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: LoggedInUserStateModel = {
	loggedInUserData: null,
};

/**
 * save user info reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const saveLoggedInUserInfo = (
	state: LoggedInUserStateModel,
	action: PayloadAction<LoggedInUserModel>,
): any => {
	state.loggedInUserData = action?.payload;
};

/* Loggedin user slice*/
const loggedInUserSlice: any = createSlice({
	name: 'loggedInUser',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state };
		});
	},
	reducers: { saveLoggedInUser: saveLoggedInUserInfo },
});

// ACTIONS
const { saveLoggedInUser } = loggedInUserSlice.actions;

// SELECTOR
const selectIsUserLoggedIn = (state: MainStateTypes) => {
	if (
		state?.loggedInUser?.loggedInUserData?.user?.id &&
		state.loggedInUser.loggedInUserData.user.id !== '' &&
		state?.loggedInUser?.loggedInUserData?.jwtToken &&
		state.loggedInUser.loggedInUserData.jwtToken !== ''
	) {
		return true;
	}

	return false;
};
const selectLoggedInUser = (state: MainStateTypes) => state?.loggedInUser?.loggedInUserData ?? null;
const selectLoggedInUserId = (state: MainStateTypes) => {
	return state?.loggedInUser?.loggedInUserData?.user?.id ?? null;
};
const selectLoggedInUserJwtToken = (state: MainStateTypes) => {
	return state?.loggedInUser?.loggedInUserData?.jwtToken ?? null;
};

const loggedInUserSliceReducer = loggedInUserSlice.reducer;

export {
	loggedInUserSliceReducer,
	saveLoggedInUser,
	selectLoggedInUser,
	selectLoggedInUserId,
	selectIsUserLoggedIn,
	selectLoggedInUserJwtToken,
	signOutAction,
};
