import { Api } from '../services';
import { takeLatest, call, put } from 'redux-saga/effects';
import { saveLoggedInUser } from '../states/LoginState';
import { UI } from '../states';

const { ApiService, apiCallTypes } = Api;

/**
 * register mobile generator function for api calling for user register mobile in app
 * @param {Object} action - contains type and payload
 */
export function* loginUser(action: any): any {
	yield put(UI.showLoader(true));
	const data = yield call(ApiService.callApiService, apiCallTypes.AUTH_LOGIN_TYPE, action?.payload);
	console.log('loginUser', data);
	if (
		data.isSucceded &&
		data?.responseData &&
		data?.responseData?.status &&
		data.responseData.status === 'success' &&
		data?.responseData?.data
	) {
		yield put(saveLoggedInUser(data.responseData.data));
	} else {
		yield put(saveLoggedInUser(null));
	}
	yield put(UI.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchLoginUser(): any {
	yield takeLatest('LOGIN_USER', loginUser);
}
