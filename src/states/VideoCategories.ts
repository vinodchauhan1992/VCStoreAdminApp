import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { UserModel } from '../model/UserModel';
import { MainStateTypes, UserStateTypes, VideoCategoriesStateTypes } from '../types/statesTypes';
import { VideoCategoriesEtagDataModel, VideoCategoriesModel } from '../model/VideoCategoriesModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: VideoCategoriesStateTypes = {
	videoCategoriesData: [],
	etagData: null,
};

const saveVideoCategoriesInfo = (
	state: VideoCategoriesStateTypes,
	action: PayloadAction<VideoCategoriesModel[]>,
): any => {
	state.videoCategoriesData = action?.payload;
};

const saveVideoCategoriesEtagInfo = (
	state: VideoCategoriesStateTypes,
	action: PayloadAction<VideoCategoriesEtagDataModel>,
): any => {
	state.etagData = action?.payload;
};

/* Video Categories slice*/
const videoCategoriesSlice: any = createSlice({
	name: 'videoCategories',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, videoCategoriesData: [], etagData: null };
		});
	},
	reducers: {
		saveVideoCategoriesData: saveVideoCategoriesInfo,
		saveVideoCategoriesEtagData: saveVideoCategoriesEtagInfo,
	},
});

// ACTIONS
const { saveVideoCategoriesData, saveVideoCategoriesEtagData } = videoCategoriesSlice.actions;

// SELECTOR
const selectVideoCategoriesData = (state: MainStateTypes) =>
	state?.videoCategories?.videoCategoriesData ?? null;
const selectVideoCategoriesEtagData = (state: MainStateTypes) =>
	state?.videoCategories?.etagData ?? null;
const selectVideoCategoriesEtag = (state: MainStateTypes) => {
	return state?.videoCategories?.etagData?.etag ?? '';
};

const videoCategoriesSliceReducer = videoCategoriesSlice.reducer;

export {
	videoCategoriesSliceReducer,
	saveVideoCategoriesData,
	saveVideoCategoriesEtagData,
	selectVideoCategoriesData,
	selectVideoCategoriesEtagData,
	selectVideoCategoriesEtag,
	signOutAction,
};
