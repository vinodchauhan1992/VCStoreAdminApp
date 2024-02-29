import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, VideoListStateTypes } from '../types/statesTypes';
import { VideoListEtagModel, VideoListItemsModel } from '../model/VideoListModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: VideoListStateTypes = {
	videoListData: [],
	etagData: null,
};

const saveVideoListInfo = (
	state: VideoListStateTypes,
	action: PayloadAction<VideoListItemsModel[]>,
): any => {
	state.videoListData = action?.payload;
};

const saveVideoListEtagInfo = (
	state: VideoListStateTypes,
	action: PayloadAction<VideoListEtagModel>,
): any => {
	state.etagData = action?.payload;
};

/* Video List slice*/
const videoListSlice: any = createSlice({
	name: 'videoList',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, videoListData: [], etagData: null };
		});
	},
	reducers: {
		saveVideoListData: saveVideoListInfo,
		saveVideoListEtagData: saveVideoListEtagInfo,
	},
});

// ACTIONS
const { saveVideoListData, saveVideoListEtagData } = videoListSlice.actions;

// SELECTOR
const selectVideoListData = (state: MainStateTypes) => state?.videoList?.videoListData ?? null;
const selectVideoListEtagData = (state: MainStateTypes) => state?.videoList?.etagData ?? null;
const selectVideoListEtag = (state: MainStateTypes) => {
	return state?.videoList?.etagData?.etag ?? '';
};

const videoListSliceReducer = videoListSlice.reducer;

export {
	videoListSliceReducer,
	saveVideoListData,
	saveVideoListEtagData,
	selectVideoListData,
	selectVideoListEtagData,
	selectVideoListEtag,
	signOutAction,
};
