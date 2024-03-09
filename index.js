/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ClientApp from './src/ClientApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ClientApp);
