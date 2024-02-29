export interface LocalizedModel {
	title?: string | null;
	description?: string | null;
}

export interface ThumbnailInternalStructureModel {
	url?: string | null;
	width?: number | null;
	height?: number | null;
}

export interface ThumbnailModel {
	default?: ThumbnailInternalStructureModel | null;
	medium?: ThumbnailInternalStructureModel | null;
	high?: ThumbnailInternalStructureModel | null;
	standard?: ThumbnailInternalStructureModel | null;
	maxres?: ThumbnailInternalStructureModel | null;
}

export interface SnippetModel {
	publishedAt?: string | null;
	channelId?: string | null;
	title?: string | null;
	description?: string | null;
	thumbnails?: ThumbnailModel | null;
	channelTitle?: string | null;
	tags?: string[] | [] | null;
	categoryId?: string | null;
	liveBroadcastContent?: string | null;
	localized?: LocalizedModel | null;
	defaultAudioLanguage?: string | null;
}

export interface ContentDetailsModel {
	duration?: string | null;
	dimension?: string | null;
	definition?: string | null;
	caption?: string | null;
	licensedContent?: string | null;
	contentRating?: {} | null;
	projection?: string | null;
}

export interface VideoListItemsModel {
	kind?: string | null;
	etag?: string | null;
	id?: string | null;
	snippet?: SnippetModel | null;
	contentDetails?: ContentDetailsModel | {} | null;
	player?: {
		embedHtml: string | null;
	} | null;
}

export interface VideoListEtagModel {
	kind?: string | null;
	etag?: string | null;
	nextPageToken?: string | null;
	pageInfo: {
		totalResults?: number | null;
		resultsPerPage?: number | null;
	};
}
