import Axios, { AxiosError } from 'axios';
import * as ApiCalls from './apiCalls';
import { HTTPRequestProps } from '../../types/servicesTypes/api-service-types';
import config from '../../config';
import { User } from '../../states';
import { UserModel } from '../../model/UserModel';

/**
 * This function get the access token from store
 */
const getAuthorizationToken = (): string => {
	const userData: UserModel = config.store.getState()?.user?.userData;
	return userData.serverAuthCode ? `Bearer ${userData.serverAuthCode}` : '';
};

/**
 * This function will hit a POST request given
 * @param {string} apiUrl
 * @param {unknown} jsonBody
 */
export const httpPostRequest = async ({ apiUrl, jsonBody }: HTTPRequestProps): Promise<unknown> => {
	return await Axios.post(apiUrl, jsonBody, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			// Authorization: getAuthorizationToken(),
		},
	})
		.then((response: any) => {
			if (response.data.status === 401) {
				config.store.dispatch(User.signOutAction());
			} else {
				return { response, isSucceded: true };
			}
		})
		.catch((error: any) => {
			const excep = error as AxiosError;
			return { response: excep.response, isSucceded: false };
		});
};

/**
 * This function will hit a GET request given
 * @param {string} apiUrl
 */
export const httpGetRequest = async ({ apiUrl }: HTTPRequestProps): Promise<unknown> => {
	return await Axios.get(apiUrl, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			// Authorization: getAuthorizationToken(),
		},
	})
		.then((response: any) => {
			if (response.data.status === 401) {
				config.store.dispatch(User.signOutAction());
			} else {
				return { response, isSucceded: true };
			}
		})
		.catch((error: any) => {
			const excep = error as AxiosError;
			return { response: excep.response, isSucceded: false };
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
	extraUrlString: string,
): Promise<unknown> => {
	const request = ApiCalls.apiCalls({ apiType });
	let apiUrl = `${config.constants.apiBaseUrl}${request.requestUrl}?key=${config.constants.apiKey}`;
	if (request.requestType === 'POST') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);
		return await httpPostRequest({ apiUrl, jsonBody });
	} else if (request.requestType === 'GET') {
		if (extraUrlString && extraUrlString !== '') {
			apiUrl = `${apiUrl}${extraUrlString}`;
		}
		console.log('apiUrl', apiUrl);
		return await httpGetRequest({ apiUrl });
	}
};
