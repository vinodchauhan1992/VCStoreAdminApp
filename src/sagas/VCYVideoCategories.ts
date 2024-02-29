import { Api } from '../services';
import { takeLatest, call, put } from 'redux-saga/effects';
import { UI } from '../states';
import { saveVideoCategoriesData, saveVideoCategoriesEtagData } from '../states/VideoCategories';

const { ApiService, apiCallTypes } = Api;

/**
 * register mobile generator function for api calling for user register mobile in app
 * @param {Object} action - contains type and payload
 */
export function* getVideoCategories(action: any): any {
	yield put(UI.showLoader(true));
	const data = yield call(
		ApiService.callApiService,
		apiCallTypes.GET_VIDEO_CATEGORIES,
		action.payload,
		'&regionCode=IN',
	);

	if (data?.response?.status && data.response.status === 200 && data?.response?.data?.items) {
		yield put(saveVideoCategoriesData(data.response.data.items));
		yield put(
			saveVideoCategoriesEtagData({
				kind: data.response.data?.kind,
				etag: data.response.data?.etag,
				nextPageToken: data.response.data?.nextPageToken,
				prevPageToken: data.response.data?.prevPageToken,
				pageInfo: data.response.data?.pageInfo,
			}),
		);
	} else {
		yield put(saveVideoCategoriesData([]));
	}
	yield put(UI.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchGetVideoCategories(): any {
	yield takeLatest('GET_VIDEO_CATEGORIES', getVideoCategories);
}
