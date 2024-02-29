import apiCallTypes from './apiCallTypes';
import apiContainersUrl from './apiContainerUrls';
import { ApiCallsProps, ApiCallsReturnProps } from '../../types/servicesTypes/api-calls-types';

/**
 * This function is responsible to decide the requestType and requestUrl of api calls
 * @param {ApiCallsProps} apiType
 */
export const apiCalls = ({ apiType }: ApiCallsProps): ApiCallsReturnProps => {
	let requestType = '';
	let requestUrl = '';
	switch (apiType) {
		/* GET request */
		case apiCallTypes.GET_VIDEO_CATEGORIES:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_VIDEO_CATEGORIES_URL;
			break;

		/* GET request */
		case apiCallTypes.GET_VIDEO_LIST:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_VIDEO_LIST_URL;
			break;

		/* GET request */
		case apiCallTypes.GET_COMMENTS_THREADS:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_COMMENTS_THREADS_URL;
			break;
	}
	return { requestType, requestUrl };
};
