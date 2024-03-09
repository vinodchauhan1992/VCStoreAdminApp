import { store } from './store';
import colors from './colors';
import routes from './routes';
import strings from './strings';
import { Config } from '../types/config';
import vectorIcons from './vectorIcons';
import constants from './constants';
import env from './env';

const config: Partial<Config> = {
	constants,
	colors,
	store,
	routes,
	strings,
	vectorIcons,
	env,
};

export default config as Config;
