import { TextStyle, ViewStyle } from 'react-native';
import config from '../../config';

export default () => {
	const layout: ViewStyle = {
		flex: 1,
		// backgroundColor: config.colors.appTheme,
		justifyContent: 'center',
		alignItems: 'center',
	};

	const loadingText: TextStyle = {
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 50,
		// color: config.colors.white,
	};

	return {
		layout,
		loadingText,
		icon: {
			fontSize: 200,
			// color: config.colors.white,
		},
	};
};
