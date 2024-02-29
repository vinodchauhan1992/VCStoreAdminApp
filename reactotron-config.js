import Reactotron, { trackGlobalErrors, networking } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

let reactotronConfig = null;
let sagasMonitor;
if (process.env.NODE_ENV !== 'production') {
	/* If you have tethered an iOS device to your development machine and have deployed
	 * your React Native app (in DEBUG mode) to the device, Reactotron needs to know the
	 * host of the machine in order to connect.
	 */
	reactotronConfig = Reactotron.configure({
		name: 'VCYoutube', // name of the product
		host: '127.0.0.1', // default is localhost (on android don't forget to `adb reverse tcp:9090 tcp:9090`)
	})
		.setAsyncStorageHandler(AsyncStorage)
		.useReactNative({
			storybook: false,
			asyncStorage: false, // there are more options to the async storage.
			overlay: false, // just turning off overlay
		})
		.use(
			trackGlobalErrors({
				veto: (frame) => frame.fileName.indexOf('/node_modules/react-native/') >= 0,
			}),
		)
		.use(
			networking({
				ignoreContentTypes: /^(image)\/.*$/i,
				ignoreUrls: /\/(logs|symbolicate)$/,
			}),
		)
		.use(sagaPlugin())
		.use(reactotronRedux());

	console.tron = Reactotron;
	Reactotron.connect(); // Connect with reactotron
	Reactotron.clear(); // Clear the logs.
	sagasMonitor = Reactotron.createSagaMonitor();
}
const reactotron = reactotronConfig;
const sagaMonitor = sagasMonitor;

export { sagaMonitor, reactotron };
