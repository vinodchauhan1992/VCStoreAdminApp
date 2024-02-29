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

	const googleSigninButtonWrapperStyle: ViewStyle = {
		alignItems: 'center',
	};

	const layout: ViewStyle = {
		flex: 1,
		alignItems: 'center',
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
		googleSigninButtonWrapperStyle,
		googleSigninButtonStyle: {
			width: 192,
			height: 48,
			marginTop: 30,
			marginBottom: 15,
		},
	};
};
