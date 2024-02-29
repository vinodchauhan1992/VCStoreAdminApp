import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, SelectedVideoStateTypes } from '../types/statesTypes';
import { VideoListEtagModel, VideoListItemsModel } from '../model/VideoListModel';
import config from '../config';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: SelectedVideoStateTypes = {
	selectedVideoData: null,
	selectedVideoListEtagData: null,
};

const saveSelectedVideoListInfo = (
	state: SelectedVideoStateTypes,
	action: PayloadAction<VideoListItemsModel>,
): void => {
	state.selectedVideoData = action.payload;
};

const saveSelectedVideoListEtagInfo = (
	state: SelectedVideoStateTypes,
	action: PayloadAction<VideoListEtagModel>,
): void => {
	state.selectedVideoListEtagData = action.payload;
};

/* Selected Video slice*/
const selectedVideoSlice: any = createSlice({
	name: 'selectedVideo',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, selectedVideoData: null, selectedVideoListEtagData: null };
		});
	},
	reducers: {
		saveSelectedVideoListData: saveSelectedVideoListInfo,
		saveSelectedVideoListEtagData: saveSelectedVideoListEtagInfo,
	},
});

// ACTIONS
const { saveSelectedVideoListData, saveSelectedVideoListEtagData } = selectedVideoSlice.actions;

// SELECTOR
const selectSelectedVideoData = ({ selectedVideo }: MainStateTypes): VideoListItemsModel | null =>
	selectedVideo?.selectedVideoData ?? null;
const selectSelectedVideoTitle = ({ selectedVideo }: MainStateTypes): string | null =>
	selectedVideo?.selectedVideoData?.snippet?.title ?? config.strings.VIDEO_TITLE;

const selectedVideoSliceReducer = selectedVideoSlice.reducer;

export {
	saveSelectedVideoListData,
	saveSelectedVideoListEtagData,
	selectSelectedVideoData,
	selectSelectedVideoTitle,
	selectedVideoSliceReducer,
};
