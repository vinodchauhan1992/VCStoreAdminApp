import { CommentThreadsEtagModel, CommentThreadsItemsModel } from '../model/CommentThreadsModel';
import { SettingsModel } from '../model/SettingsModel';
import { UserModel } from '../model/UserModel';
import { VideoCategoriesEtagDataModel, VideoCategoriesModel } from '../model/VideoCategoriesModel';
import { VideoListEtagModel, VideoListItemsModel } from '../model/VideoListModel';

export interface UIStateTypes {
	isToShowSplash?: boolean;
	isLoading?: boolean;
}

export interface UserStateTypes {
	userData?: UserModel | null;
}

export interface UserStateTypes {
	userData?: UserModel | null;
}

export interface VideoCategoriesStateTypes {
	videoCategoriesData?: VideoCategoriesModel[] | [] | null;
	etagData?: VideoCategoriesEtagDataModel | null;
}

export interface SettingsOptionsStateTypes {
	settingsData?: SettingsModel[] | [] | null;
}

export interface VideoListStateTypes {
	videoListData?: VideoListItemsModel[] | [] | null;
	etagData?: VideoListEtagModel | null;
}

export interface SelectedVideoCategoryStateTypes {
	selectedVideoCategoryID?: string | null;
	videoListsVideoCategoryID?: string | null;
	selectedVideoCategoryName?: string | null;
}

export interface SelectedVideoStateTypes {
	selectedVideoData?: VideoListItemsModel | null;
	selectedVideoListEtagData?: VideoListEtagModel | null;
}

export interface CommentThreadsStateTypes {
	commentThreadsData?: CommentThreadsItemsModel[] | [] | null;
	etagData?: CommentThreadsEtagModel | null;
}

export interface SelectedRepliesStateTypes {
	selectedReplyData?: CommentThreadsItemsModel | null;
}

export interface ThemeStateStateTypes {
	isDark?: boolean | null;
}

export interface MainStateTypes {
	ui?: UIStateTypes | null;
	user?: UserStateTypes | null;
	videoCategories?: VideoCategoriesStateTypes | null;
	settingsOptions?: SettingsOptionsStateTypes | null;
	videoList?: VideoListStateTypes | null;
	selectedVideoCategory?: SelectedVideoCategoryStateTypes | null;
	selectedVideo?: SelectedVideoStateTypes | null;
	commentThreads?: CommentThreadsStateTypes | null;
	selectedReplies?: SelectedRepliesStateTypes | null;
	themeState?: ThemeStateStateTypes | null;
	_persist?: {
		version?: number;
		rehydrated?: boolean;
	};
}
