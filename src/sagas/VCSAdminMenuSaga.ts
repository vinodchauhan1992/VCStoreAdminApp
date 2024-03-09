import { Api } from '../services';
import { takeLatest, call, put } from 'redux-saga/effects';
import { saveAdminMenu } from '../states/AdminMenusState';
import { UI } from '../states';

const { ApiService, apiCallTypes } = Api;

/**
 * register mobile generator function for api calling for user register mobile in app
 * @param {Object} action - contains type and payload
 */
export function* getAllAdminMenus(action: any): any {
	yield put(UI.showLoader(true));
	const data = yield call(
		ApiService.callApiService,
		apiCallTypes.GET_ALL_ADMIN_MENUS_TYPE,
		action?.payload,
	);

	if (
		data.isSucceded &&
		data?.responseData &&
		data?.responseData?.status &&
		data.responseData.status === 'success' &&
		data?.responseData?.data
	) {
		yield put(saveAdminMenu(data.responseData));
	} else {
		yield put(saveAdminMenu(null));
	}
	yield put(UI.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchGetAllAdminMenus(): any {
	yield takeLatest('GET_ALL_ADMIN_MENUS', getAllAdminMenus);
}
