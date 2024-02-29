import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import { MainStateTypes, SelectedRepliesStateTypes } from '../types/statesTypes';
import { CommentThreadsItemsModel } from '../model/CommentThreadsModel';

/* Signout Action */
const signOutAction = createAction('signout');

/* Initial State */
const initialState: SelectedRepliesStateTypes = {
	selectedReplyData: null,
};

const saveSelectedReplyInfo = (
	state: SelectedRepliesStateTypes,
	action: PayloadAction<CommentThreadsItemsModel>,
): void => {
	state.selectedReplyData = action.payload;
};

/* Selected Replies slice*/
const selectedRepliesSlice: any = createSlice({
	name: 'selectedReplies',
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(signOutAction, (state) => {
			return { ...state, selectedReplyData: null };
		});
	},
	reducers: {
		saveSelectedReplyData: saveSelectedReplyInfo,
	},
});

// ACTIONS
const { saveSelectedReplyData } = selectedRepliesSlice.actions;

// SELECTOR
const selectSelectedReplyData = ({
	selectedReplies,
}: MainStateTypes): CommentThreadsItemsModel | null => selectedReplies?.selectedReplyData ?? null;

const selectedRepliesSliceReducer = selectedRepliesSlice.reducer;

export { saveSelectedReplyData, selectSelectedReplyData, selectedRepliesSliceReducer };
