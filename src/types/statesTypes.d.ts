import { SettingsModel } from '../model/SettingsModel';
import { LoggedInUserModel } from '../model/LoggedInUserModel';
import { AdminMenuModel } from '../model/AdminMenuModel';

export interface UIStateTypes {
	isToShowSplash?: boolean;
	isLoading?: boolean;
}

export interface LoggedInUserStateModel {
	loggedInUserData?: LoggedInUserModel | null;
}

export interface ThemeStateStateTypes {
	isDark?: boolean | null;
}

export interface SettingsOptionsStateTypes {
	settingsData?: SettingsModel[] | [] | null;
}

export interface AdminMenuStateModel {
	adminMenuData?: AdminMenuModel | null;
}

export interface MainStateTypes {
	ui?: UIStateTypes | null;
	loggedInUser?: LoggedInUserStateModel | null;
	themeState?: ThemeStateStateTypes | null;
	settingsOptions?: SettingsOptionsStateTypes | null;
	adminMenu?: AdminMenuStateModel | null;
	_persist?: {
		version?: number;
		rehydrated?: boolean;
	};
}
