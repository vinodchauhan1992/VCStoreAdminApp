import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, SelectedVideoCategoryStateTypes } from '../types/statesTypes';
import config from '../config';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: SelectedVideoCategoryStateTypes = {
	selectedVideoCategoryID: null,
	videoListsVideoCategoryID: null,
	selectedVideoCategoryName: 'Videos',
};

const saveSelectedVideoCategoryIDInfo = (
	state: SelectedVideoCategoryStateTypes,
	action: PayloadAction<string>,
): void => {
	state.selectedVideoCategoryID = action.payload;
};

const saveSelectedVideoCategoryNameInfo = (
	state: SelectedVideoCategoryStateTypes,
	action: PayloadAction<string>,
): void => {
	state.selectedVideoCategoryName = action.payload;
};

const saveVideoListVideoCategoryIDInfo = (
	state: SelectedVideoCategoryStateTypes,
	action: PayloadAction<string>,
): void => {
	state.videoListsVideoCategoryID = action.payload;
};

/* Selected VideoCategory slice*/
const selectedVideoCategorySlice: any = createSlice({
	name: 'selectedVideoCategory',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return {
				...state,
				selectedVideoCategoryID: null,
				videoListsVideoCategoryID: null,
				selectedVideoCategoryName: 'Vi',
			};
		});
	},
	reducers: {
		saveSelectedVideoCategoryIDData: saveSelectedVideoCategoryIDInfo,
		saveSelectedVideoCategoryNameData: saveSelectedVideoCategoryNameInfo,
		saveVideoListVideoCategoryIDData: saveVideoListVideoCategoryIDInfo,
	},
});

// ACTIONS
const {
	saveSelectedVideoCategoryIDData,
	saveSelectedVideoCategoryNameData,
	saveVideoListVideoCategoryIDData,
} = selectedVideoCategorySlice.actions;

// SELECTOR
const selectSelectedVideoCategoryID = ({ selectedVideoCategory }: MainStateTypes): string | null =>
	selectedVideoCategory?.selectedVideoCategoryID ?? null;
const selectSelectedVideoCategoryName = ({
	selectedVideoCategory,
}: MainStateTypes): string | null =>
	selectedVideoCategory?.selectedVideoCategoryName ?? config.strings.VIDEOS_LIST_TITLE;
const selectVideoListVideoCategoryID = ({ selectedVideoCategory }: MainStateTypes): string | null =>
	selectedVideoCategory?.videoListsVideoCategoryID ?? null;
const selectIsToReloadVideoList = ({ selectedVideoCategory }: MainStateTypes): boolean => {
	const catID = selectedVideoCategory?.selectedVideoCategoryID;
	const prevCatID = selectedVideoCategory?.videoListsVideoCategoryID;
	if (catID === prevCatID) {
		return false;
	}
	return true;
};

const selectedVideoCategorySliceReducer = selectedVideoCategorySlice.reducer;

export {
	saveSelectedVideoCategoryIDData,
	saveSelectedVideoCategoryNameData,
	saveVideoListVideoCategoryIDData,
	selectSelectedVideoCategoryID,
	selectSelectedVideoCategoryName,
	selectVideoListVideoCategoryID,
	selectIsToReloadVideoList,
	selectedVideoCategorySliceReducer,
};
