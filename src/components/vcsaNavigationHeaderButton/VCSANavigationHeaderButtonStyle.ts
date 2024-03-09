import { StyleSheet } from 'react-native';
import config from '../../config';
import { Text, MD3Theme } from 'react-native-paper';

export default (theme: MD3Theme) => {
	const styles = StyleSheet.create({
		container: {
			alignSelf: 'flex-end',
			padding: 5,
			marginHorizontal: 11,
		},
		iconAccessory: {
			fontSize: 20,
			color: theme.colors.onBackground,
		},
		textAccessory: {
			color: theme.colors.onBackground,
		},
		disabledAccessory: {
			color: theme.colors.outline,
		},
		notificationContainer: {
			height: 18,
			width: 18,
			// backgroundColor: config.colors.notificationBgViewColor,
			position: 'absolute',
			alignSelf: 'flex-end',
			borderRadius: 50,
			justifyContent: 'center',
			alignItems: 'center',
		},
		count: {
			fontSize: 7,
			// color: 'black',
		},
	});
	return styles;
};
