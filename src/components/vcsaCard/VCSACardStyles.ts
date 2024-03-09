import { StyleSheet } from 'react-native';
import config from '../../config';

export default (theme: any) => {
	const styles = StyleSheet.create({
		mainContainerStyle: {
			marginTop: 20,
			marginHorizontal: 16,
		},
		cardContentStyle: {
			marginVertical: 20,
		},
		cardContentRowWrapperStyle: {
			flexDirection: 'row',
		},
		cardContentColumnWrapperStyle: {
			flex: 1,
		},
		chevronIconStyle: {
			alignSelf: 'center',
			color: theme.colors.primary,
		},
		cardActionsStyle: {
			marginVertical: 20,
			marginHorizontal: 16,
		},
		buttonColor: {
			// color: config.colors.appTheme,
		},
		buttonTextColor: {
			// color: config.colors.white,
		},
	});
	return styles;
};
