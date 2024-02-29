import { all, fork } from 'redux-saga/effects';
import { watchGetVideoCategories } from './VCYVideoCategories';
import { watchGetVideoList } from './VCYVideoList';
import { watchGetCommentThreads } from './VCYCommentsThreads';

export default function* rootSaga(): any {
	return yield all([
		fork(watchGetVideoCategories),
		fork(watchGetVideoList),
		fork(watchGetCommentThreads),
	]);
}
