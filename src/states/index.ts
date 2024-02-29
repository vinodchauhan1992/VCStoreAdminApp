import { combineReducers } from '@reduxjs/toolkit';
import * as UI from './UI';
import * as User from './User';
import * as VideoCategories from './VideoCategories';
import * as SettingsOptions from './SettingsOptions';
import * as VideoList from './VideoList';
import * as SelectedVideoCategory from './SelectedVideoCategory';
import * as SelectedVideo from './SelectedVideo';
import * as CommentThreads from './CommentThreads';
import * as SelectedReplies from './SelectedReplies';
import * as ThemeState from './ThemeState';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import config from '../config';

const rootReducer = combineReducers({
	ui: UI.uiSliceReducer,
	user: User.userSliceReducer,
	videoCategories: VideoCategories.videoCategoriesSliceReducer,
	settingsOptions: SettingsOptions.settingsOptionsSliceReducer,
	videoList: VideoList.videoListSliceReducer,
	selectedVideoCategory: SelectedVideoCategory.selectedVideoCategorySliceReducer,
	selectedVideo: SelectedVideo.selectedVideoSliceReducer,
	commentThreads: CommentThreads.commentThreadsSliceReducer,
	selectedReplies: SelectedReplies.selectedRepliesSliceReducer,
	themeState: ThemeState.themeStateSliceReducer,
});

export {
	rootReducer,
	UI,
	User,
	VideoCategories,
	SettingsOptions,
	VideoList,
	SelectedVideoCategory,
	SelectedVideo,
	CommentThreads,
	SelectedReplies,
	ThemeState,
};
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof config.store.dispatch;
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
