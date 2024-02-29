import {
	MD3LightTheme as DefaultLightTheme,
	MD3DarkTheme as DefaultDarkTheme,
	configureFonts,
	adaptNavigationTheme,
} from 'react-native-paper';
import lightThemeColors from './lightThemeColors.json';
import darkThemeColors from './darkThemeColors.json';
import { ColorSchemeName } from 'react-native';
import {
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import config from '../config';

const fontsObj = {
	labelLarge: {
		fontFamily: 'Poppins-Bold',
		fontSize: 16,
	},
	labelMedium: {
		fontFamily: 'Poppins-Bold',
		fontSize: 14,
	},
	labelSmall: {
		fontFamily: 'Poppins-Bold',
		fontSize: 12,
	},
	displayLarge: {
		fontFamily: 'Poppins-ExtraBold',
		fontSize: 30,
	},
	displayMedium: {
		fontFamily: 'Poppins-ExtraBold',
		fontSize: 28,
	},
	displaySmall: {
		fontFamily: 'Poppins-ExtraBold',
		fontSize: 26,
	},
	titleLarge: {
		fontFamily: 'Poppins-Bold',
		fontSize: 16,
	},
	titleMedium: {
		fontFamily: 'Poppins-Bold',
		fontSize: 14,
	},
	titleSmall: {
		fontFamily: 'Poppins-Bold',
		fontSize: 12,
	},
	bodyLarge: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
	},
	bodyMedium: {
		fontFamily: 'Poppins-Regular',
		fontSize: 12,
	},
	bodySmall: {
		fontFamily: 'Poppins-Regular',
		fontSize: 10,
	},
	regular: {
		fontFamily: 'Poppins-Regular',
	},
	medium: {
		fontFamily: 'Poppins-Medium',
	},
	light: {
		fontFamily: 'Poppins-Light',
	},
	thin: {
		fontFamily: 'Poppins-Thin',
	},
};

export const fontConfig: any = {
	web: { ...fontsObj },
	ios: { ...fontsObj },
	android: { ...fontsObj },
};

export const customLightTheme: any = {
	...DefaultLightTheme,
	colors: {
		...lightThemeColors.colors,
		loaderColorWithAlpha: config.colors.loaderColorWithAlpha,
		primaryContainerWithAlpha: 'rgba(255, 219, 209, 0.6)',
	},
	fonts: configureFonts({ config: fontConfig, isV3: false }),
	version: 3,
	isV3: true,
};

export const customDarkTheme: any = {
	...DefaultDarkTheme,
	colors: {
		...darkThemeColors.colors,
		loaderColorWithAlpha: config.colors.loaderColorWithAlpha,
		primaryContainerWithAlpha: 'rgba(135, 33, 0, 0.6)',
	},
	fonts: configureFonts({ config: fontConfig, isV3: false }),
	version: 3,
	isV3: true,
};

export const getAppTheme = (colorScheme: ColorSchemeName) => {
	return colorScheme === 'dark' ? customDarkTheme : customLightTheme;
};

export const getNavigationAdaptiveTheme = (colorScheme: ColorSchemeName) => {
	if (colorScheme === 'dark') {
		const { DarkTheme } = adaptNavigationTheme({
			reactNavigationDark: NavigationDarkTheme,
			materialDark: customDarkTheme,
		});
		return DarkTheme;
	}
	const { LightTheme } = adaptNavigationTheme({
		reactNavigationLight: NavigationDefaultTheme,
		materialLight: customLightTheme,
	});
	return LightTheme;
};
