export interface VideoCategoriesModel {
	kind?: string | null;
	etag?: string | null;
	id?: string | null;
	snippet?: {
		title?: string | null;
		assignable?: boolean | null;
		channelId?: string | null;
	};
}

export interface VideoCategoriesEtagDataModel {
	kind?: string | null;
	etag?: string | null;
	nextPageToken?: string | null;
	prevPageToken?: string | null;
	pageInfo?: {
		totalResults?: number | null;
		resultsPerPage?: number | null;
	} | null;
}
