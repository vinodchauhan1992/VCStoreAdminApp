import { TextStyle, ViewStyle } from 'react-native';
import config from '../../config';

export default () => {
	const mainHeadingText: TextStyle = {
		textAlign: 'center',
		// color: config.colors.appTheme,
	};
	const subHeadingText: TextStyle = {
		textAlign: 'center',
		// color: config.colors.darkGray,
	};

	const textFieldWrapperStyle: ViewStyle = {
		// alignItems: 'center',
		marginTop: 24,
	};

	const layout: ViewStyle = {
		flex: 1,
		justifyContent: 'center',
	};

	return {
		layout,
		surface: {
			paddingVertical: 20,
			paddingHorizontal: 30,
			marginHorizontal: 20,
		},
		mainHeadingText,
		subHeadingText,
		textFieldWrapperStyle,
		loginButtonStyle: {
			marginTop: 24,
		},
	};
};
