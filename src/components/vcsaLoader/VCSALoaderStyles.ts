import { StyleSheet } from 'react-native';
import config from '../../config';

export default (theme: any) => {
	const styles = StyleSheet.create({
		mainBackViewStyle: {
			backgroundColor: theme.colors.loaderColorWithAlpha,
			width: '100%',
			height: '100%',
			position: 'absolute',
			zIndex: 2,
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
		},
	});
	return styles;
};
