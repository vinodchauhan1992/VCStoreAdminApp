import Axios from 'axios';
import * as ApiCalls from './apiCalls';
import { HTTPRequestProps } from '../../types/servicesTypes/api-service-types';
import { commonUtils } from '../../utils';

const { getApiBaseUrl } = commonUtils;

export const httpGetRequest = async ({ apiUrl, contentType }: HTTPRequestProps) => {
	return await Axios.get(apiUrl, {
		headers: {
			Accept: 'application/json',
			'Content-Type': contentType ? contentType : 'application/json',
		},
	})
		.then((response: any) => {
			if (response.status === 200) {
				return { responseData: response.data, isSucceded: true };
			} else {
				return { responseData: null, isSucceded: false };
			}
		})
		.catch((error: any) => {
			const excep = error;

			return { responseData: excep.response, isSucceded: false };
		});
};

export const httpDeleteRequest = async ({ apiUrl, contentType }: HTTPRequestProps) => {
	return await Axios.delete(apiUrl, {
		headers: {
			Accept: 'application/json',
			'Content-Type': contentType ? contentType : 'application/json',
		},
	})
		.then((response: any) => {
			if (response.status === 200) {
				return { responseData: response.data, isSucceded: true };
			} else {
				return { responseData: null, isSucceded: false };
			}
		})
		.catch((error: any) => {
			const excep = error;

			return { responseData: excep.response, isSucceded: false };
		});
};

export const httpPostRequest = async ({ apiUrl, jsonBody, contentType }: HTTPRequestProps) => {
	return await Axios.post(apiUrl, jsonBody, {
		headers: {
			Accept: 'application/json',
			'Content-Type': contentType ? contentType : 'application/json',
		},
	})
		.then((response: any) => {
			if (response.status === 200) {
				return { responseData: response.data, isSucceded: true };
			} else {
				return { responseData: null, isSucceded: false };
			}
		})
		.catch((error: any) => {
			const excep = error;

			return { responseData: excep.response, isSucceded: false };
		});
};

export const httpUpdateRequest = async ({ apiUrl, jsonBody, contentType }: HTTPRequestProps) => {
	return await Axios.put(apiUrl, jsonBody, {
		headers: {
			Accept: 'application/json',
			'Content-Type': contentType ? contentType : 'application/json',
		},
	})
		.then((response: any) => {
			if (response.status === 200) {
				return { responseData: response.data, isSucceded: true };
			} else {
				return { responseData: null, isSucceded: false };
			}
		})
		.catch((error: any) => {
			const excep = error;

			return { responseData: excep.response, isSucceded: false };
		});
};

/**
 * This is an actual function for calling api service and it will decide whether the api call will be
 * GET or POST request
 * @param {string} apiType
 * @param {any} jsonBody
 */
export const callApiService = async (
	apiType: string,
	jsonBody: any,
	extraUrlString?: string,
): Promise<unknown> => {
	const request = ApiCalls.apiCalls({ apiType });
	let apiUrl = `${getApiBaseUrl()}${request.requestUrl}`;
	if (request.requestType === 'POST') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);

		return await httpPostRequest({ apiUrl, jsonBody, contentType: request.contentType });
	} else if (request.requestType === 'GET') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);
		return await httpGetRequest({ apiUrl, contentType: request.contentType });
	} else if (request.requestType === 'PUT') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);

		return await httpUpdateRequest({ apiUrl, jsonBody, contentType: request.contentType });
	} else if (request.requestType === 'DELETE') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);

		return await httpDeleteRequest({ apiUrl, contentType: request.contentType });
	}
};
