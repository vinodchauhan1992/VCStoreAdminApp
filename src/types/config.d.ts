import { store } from '../config/store';
import colors from '../config/colors';
import routes from '../config/routes';
import strings from '../config/strings';
import vectorIcons from '../config/vectorIcons';
import constants from '../config/constants';

export interface Config {
	colors: typeof colors;
	routes: typeof routes;
	store: typeof store;
	strings: typeof strings;
	vectorIcons: typeof vectorIcons;
	constants: typeof constants;
}
