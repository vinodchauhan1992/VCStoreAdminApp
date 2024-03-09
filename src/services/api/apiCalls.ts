import apiCallTypes from './apiCallTypes';
import apiContainersUrl from './apiContainerUrls';
import { ApiCallsProps, ApiCallsReturnProps } from '../../types/servicesTypes/api-calls-types';
import { ApiContentType } from '../../types/servicesTypes/api-service-types';

/**
 * This function is responsible to decide the requestType and requestUrl of api calls
 * @param {ApiCallsProps} apiType
 */
export const apiCalls = ({ apiType }: ApiCallsProps): ApiCallsReturnProps => {
	let requestType = '';
	let requestUrl = '';
	let contentType: ApiContentType = 'application/json';
	switch (apiType) {
		/* ---------- GET requests starts ---------------------------- */
		case apiCallTypes.GET_ALL_CATEGORIES_TYPE:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_ALL_CATEGORIES_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.GET_ALL_USER_ROLES_TYPE:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_ALL_USER_ROLES_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.GET_ALL_USER_STATUSES_TYPE:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_ALL_USER_STATUSES_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.GET_ALL_FILE_FOLDERS_TYPE:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_ALL_FILE_FOLDERS_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.GET_ALL_ADMIN_MENUS_TYPE:
			requestType = 'GET';
			requestUrl = apiContainersUrl.GET_ALL_ADMIN_MENUS_API_PATH;
			contentType = 'application/json';
			break;

		/* ---------- GET requests ends ---------------------------- */

		/* ---------- POST requests starts ---------------------------- */
		case apiCallTypes.ADD_CATEGORY_TYPE:
			requestType = 'POST';
			requestUrl = apiContainersUrl.ADD_CATEGORY_API_PATH;
			contentType = 'multipart/form-data';
			break;

		case apiCallTypes.ADD_USER_ROLE_TYPE:
			requestType = 'POST';
			requestUrl = apiContainersUrl.ADD_USER_ROLE_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.ADD_USER_STATUS_TYPE:
			requestType = 'POST';
			requestUrl = apiContainersUrl.ADD_USER_STATUS_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.ADD_FILE_FOLDER_TYPE:
			requestType = 'POST';
			requestUrl = apiContainersUrl.ADD_FILE_FOLDER_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.AUTH_LOGIN_TYPE:
			requestType = 'POST';
			requestUrl = apiContainersUrl.AUTH_LOGIN_API_PATH;
			contentType = 'application/json';
			break;

		/* ---------- POST requests ends ---------------------------- */

		/* ---------- DELETE requests starts ---------------------------- */
		case apiCallTypes.DELETE_CATEGORY_TYPE:
			requestType = 'DELETE';
			requestUrl = apiContainersUrl.DELETE_CATEGORY_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.DELETE_USER_ROLE_TYPE:
			requestType = 'DELETE';
			requestUrl = apiContainersUrl.DELETE_USER_ROLE_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.DELETE_USER_STATUS_TYPE:
			requestType = 'DELETE';
			requestUrl = apiContainersUrl.DELETE_USER_STATUS_API_PATH;
			contentType = 'application/json';
			break;

		case apiCallTypes.DELETE_FILE_FOLDER_TYPE:
			requestType = 'DELETE';
			requestUrl = apiContainersUrl.DELETE_FILE_FOLDER_API_PATH;
			contentType = 'application/json';
			break;

		/* ---------- DELETE requests ends ---------------------------- */

		/* ---------- UPDATE requests starts ---------------------------- */
		case apiCallTypes.UPDATE_CATEGORY_TYPE:
			requestType = 'PUT';
			requestUrl = apiContainersUrl.UPDATE_CATEGORY_API_PATH;
			contentType = 'multipart/form-data';
			break;

		/* ---------- UPDATE requests ends ---------------------------- */
	}

	return { requestType, requestUrl, contentType };
};
