import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../model/UserModel';
import { MainStateTypes, UserStateTypes } from '../types/statesTypes';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState = {
	userData: null,
};

/**
 * save user info reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */
const saveUserInfo = (state: UserStateTypes, action: PayloadAction<UserModel>): any => {
	state.userData = action?.payload;
};

/* User slice*/
const userSlice: any = createSlice({
	name: 'user',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state };
		});
	},
	reducers: { saveUser: saveUserInfo },
});

// ACTIONS
const { saveUser } = userSlice.actions;

// SELECTOR
const selectUser = (state: MainStateTypes) => state?.user?.userData ?? null;
const selectUserId = (state: MainStateTypes) => {
	return state?.user?.userData?.user?.id ?? null;
};

const userSliceReducer = userSlice.reducer;

export { userSliceReducer, saveUser, selectUser, selectUserId, signOutAction };
