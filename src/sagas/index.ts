import { all, fork } from 'redux-saga/effects';
import { watchLoginUser } from './VCSALoginSaga';
import { watchGetAllAdminMenus } from './VCSAdminMenuSaga';

export default function* rootSaga(): any {
	return yield all([fork(watchLoginUser), fork(watchGetAllAdminMenus)]);
}
