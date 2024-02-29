import { Api } from '../services';
import { takeLatest, call, put } from 'redux-saga/effects';
import { UI } from '../states';
import { saveCommentThreadsEtagData, saveCommentThreadsListData } from '../states/CommentThreads';

const { ApiService, apiCallTypes } = Api;

/**
 * register mobile generator function for api calling for user register mobile in app
 * @param {Object} action - contains type and payload
 */
export function* getCommentThreads(action: any): any {
	yield put(UI.showLoader(true));
	const data = yield call(
		ApiService.callApiService,
		apiCallTypes.GET_COMMENTS_THREADS,
		{},
		`&part=id&part=snippet&part=replies&maxResults=50&textFormat=plainText&videoId=${
			action?.payload?.videoID ?? ''
		}`,
	);

	if (data?.response?.status && data.response.status === 200 && data?.response?.data?.items) {
		yield put(saveCommentThreadsListData(data.response.data.items));
		yield put(
			saveCommentThreadsEtagData({
				kind: data.response.data?.kind,
				etag: data.response.data?.etag,
				nextPageToken: data.response.data?.nextPageToken,
				prevPageToken: data.response.data?.prevPageToken,
				pageInfo: data.response.data?.pageInfo,
			}),
		);
	} else {
		yield put(saveCommentThreadsListData([]));
	}
	yield put(UI.showLoader(false));
}

/**
 * Watch login function
 */
export function* watchGetCommentThreads(): any {
	yield takeLatest('GET_COMMENT_THREADS', getCommentThreads);
}
