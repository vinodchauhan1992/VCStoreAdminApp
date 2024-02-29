import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { CommentThreadsStateTypes, MainStateTypes } from '../types/statesTypes';
import { VideoListEtagModel, VideoListItemsModel } from '../model/VideoListModel';
import { CommentThreadsEtagModel, CommentThreadsItemsModel } from '../model/CommentThreadsModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: CommentThreadsStateTypes = {
	commentThreadsData: [],
	etagData: null,
};

const saveCommentThreadsListInfo = (
	state: CommentThreadsStateTypes,
	action: PayloadAction<CommentThreadsItemsModel[]>,
): any => {
	state.commentThreadsData = action?.payload;
};

const saveCommentThreadsEtagInfo = (
	state: CommentThreadsStateTypes,
	action: PayloadAction<CommentThreadsEtagModel>,
): any => {
	state.etagData = action?.payload;
};

/* Comment Threads slice*/
const commentThreadsSlice: any = createSlice({
	name: 'commentThreads',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, videoListData: [], etagData: null };
		});
	},
	reducers: {
		saveCommentThreadsListData: saveCommentThreadsListInfo,
		saveCommentThreadsEtagData: saveCommentThreadsEtagInfo,
	},
});

// ACTIONS
const { saveCommentThreadsListData, saveCommentThreadsEtagData } = commentThreadsSlice.actions;

// SELECTOR
const selectCommentThreadsListData = (state: MainStateTypes) =>
	state?.commentThreads?.commentThreadsData ?? null;
const selectCommentThreadsEtagData = (state: MainStateTypes) =>
	state?.commentThreads?.etagData ?? null;
const selectCommentThreadsEtag = (state: MainStateTypes) => {
	return state?.commentThreads?.etagData?.etag ?? '';
};

const commentThreadsSliceReducer = commentThreadsSlice.reducer;

export {
	commentThreadsSliceReducer,
	saveCommentThreadsListData,
	saveCommentThreadsEtagData,
	selectCommentThreadsListData,
	selectCommentThreadsEtagData,
	selectCommentThreadsEtag,
	signOutAction,
};
