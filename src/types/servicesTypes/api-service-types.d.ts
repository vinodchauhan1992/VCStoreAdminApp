export interface CallApiServiceProps {
	/* as a string for type of api and fetched from apiCallTypes */
	apiType: string;
	/* as a object for post request having body otherwise null */
	jsonBody?: unknown | null;
}

export type ApiContentType = 'multipart/form-data' | 'application/json';

export interface HTTPRequestProps {
	/* as a string of full url with base url */
	apiUrl: string;
	/* as a object for post request having body otherwise null */
	jsonBody?: unknown | null;
	contentType: ApiContentType;
}
