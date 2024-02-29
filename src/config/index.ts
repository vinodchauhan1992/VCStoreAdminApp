import { store } from './store';
import colors from './colors';
import routes from './routes';
import strings from './strings';
import { Config } from '../types/config';
import vectorIcons from './vectorIcons';
import constants from './constants';

const config: Partial<Config> = {
	constants,
	colors,
	store,
	routes,
	strings,
	vectorIcons,
};

export default config as Config;
