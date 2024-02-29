import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../states';
import * as sagas from '../sagas';
import { sagaMonitor, reactotron } from '../../reactotron-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['ui'],
	whitelist: [
		'user',
		'videoCategories',
		'videoList',
		'selectedVideoCategory',
		'selectedVideo',
		'themeState',
	], //persisted reducers
};

/* boolean if environment is dev then true otherwise false */
const isDevEnvironment = process.env.NODE_ENV !== 'production';

/* create a saga middleware depends on environment */
const sagaMiddleware = isDevEnvironment
	? createSagaMiddleware({ sagaMonitor })
	: createSagaMiddleware();

/* create an enhancer using reactotron for debugging */
const enhancers =
	isDevEnvironment && reactotron?.createEnhancer ? [reactotron.createEnhancer()] : [];

/* configuring store with reducer, middleware, devTools enable and enhancers */
const store = configureStore({
	reducer: persistReducer<ReturnType<typeof rootReducer>>(persistConfig, rootReducer),
	middleware: (getDefaultMiddleware: any) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
	devTools: isDevEnvironment,
	enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(enhancers),
});

const persistor = persistStore(store);

/* run the saga middleware with root saga*/
sagaMiddleware.run(sagas.default);

export { persistor, store };
