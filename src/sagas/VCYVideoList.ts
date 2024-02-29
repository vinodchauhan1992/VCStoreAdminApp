import { Api } from '../services';
import { takeLatest, call, put } from 'redux-saga/effects';
import { UI } from '../states';
import { saveVideoListData, saveVideoListEtagData } from '../states/VideoList';
import config from '../config';
import { saveVideoListVideoCategoryIDData } from '../states/SelectedVideoCategory';

const { ApiService, apiCallTypes } = Api;

/**
 * register mobile generator function for api calling for user register mobile in app
 * @param {Object} action - contains type and payload
 */
export function* getVideoList(action: any): any {
	yield put(UI.showLoader(true));
	const data = yield call(
		ApiService.callApiService,
		apiCallTypes.GET_VIDEO_LIST,
		{},
		`&part=id&part=snippet&part=contentDetails&chart=mostPopular&regionCode=IN&part=player&maxResults=${config.constants.videoListMaxResults}&videoCategoryId=${action?.payload?.videoCategoryId}`,
	);

	if (data?.response?.status && data.response.status === 200 && data?.response?.data?.items) {
		yield put(saveVideoListData(data.response.data.items));
		yield put(saveVideoListVideoCategoryIDData(action?.payload?.videoCategoryId));
		yield put(
			saveVideoListEtagData({
				kind: data.response.data?.kind,
				etag: data.response.data?.etag,
				nextPageToken: data.response.data?.nextPageToken,
				prevPageToken: data.response.data?.prevPageToken,
				pageInfo: data.response.data?.pageInfo,
			}),
		);
	} else {
		yield put(saveVideoListData([]));
	}
	yield put(UI.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchGetVideoList(): any {
	yield takeLatest('GET_VIDEO_LIST', getVideoList);
}
