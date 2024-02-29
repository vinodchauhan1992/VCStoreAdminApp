export interface TopLevelCommentSnippetModel {
	channelId?: string | null;
	videoId?: string | null;
	textDisplay?: string | null;
	textOriginal?: string | null;
	authorDisplayName?: string | null;
	authorProfileImageUrl?: string | null;
	authorChannelUrl?: string | null;
	authorChannelId: {
		value?: string | null;
	} | null;
	canRate: boolean;
	viewerRating?: string | null;
	likeCount?: number | null;
	publishedAt?: string | null;
	updatedAt?: string | null;
}

export interface TopLevelCommentModel {
	kind?: string | null;
	etag?: string | null;
	id?: string | null;
	snippet?: TopLevelCommentSnippetModel | null;
}

export interface SnippetModel {
	channelId?: string | null;
	videoId?: string | null;
	topLevelComment?: TopLevelCommentModel | null;
	canReply: boolean;
	totalReplyCount?: number | null;
	isPublic: boolean;
}

export interface RepliedCommentSnippetModel {
	channelId?: string | null;
	videoId?: string | null;
	textDisplay?: string | null;
	textOriginal?: string | null;
	parentId?: string | null;
	authorDisplayName?: string | null;
	authorProfileImageUrl?: string | null;
	authorChannelUrl?: string | null;
	authorChannelId: {
		value?: string | null;
	} | null;
	canRate: boolean;
	viewerRating?: string | null;
	likeCount?: number | null;
	publishedAt?: string | null;
	updatedAt?: string | null;
}

export interface RepliedCommentModel {
	kind?: string | null;
	etag?: string | null;
	id?: string | null;
	snippet?: RepliedCommentSnippetModel | null;
}

export interface RepliesModel {
	comments?: RepliedCommentModel[] | [] | null;
}

export interface CommentThreadsItemsModel {
	kind?: string | null;
	etag?: string | null;
	id?: string | null;
	snippet?: SnippetModel | null;
	replies?: RepliesModel | null;
}

export interface CommentThreadsEtagModel {
	kind?: string | null;
	etag?: string | null;
	nextPageToken?: string | null;
	pageInfo: {
		totalResults?: number | null;
		resultsPerPage?: number | null;
	};
}
