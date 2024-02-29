import config from '../config';
import { SettingsModel } from '../model/SettingsModel';

export const getSettingsData = (): SettingsModel[] => {
	return [
		{
			id: 'profile',
			title: 'Profile',
			subtitle: 'Profile can be view and edit here.',
			iconType: 'chevron',
			route: config.routes.PROFILE,
		},
		{
			id: 'dark_theme',
			title: 'Dark theme',
			subtitle: 'You can switch the theme here.',
			iconType: 'switch',
			route: null,
		},
		{
			id: 'signout',
			title: 'Sign Out',
			subtitle: '',
			iconType: 'none',
			route: null,
		},
	];
};
