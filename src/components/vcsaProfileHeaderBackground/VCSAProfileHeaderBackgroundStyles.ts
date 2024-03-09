import { ImageStyle, ViewStyle } from 'react-native';
import config from '../../config';

export default (theme: any) => {
	const avatarImageContainerSize = config.constants.profileAvatarImageSize + 8;

	const avatarImageWrapperStyle: ViewStyle = {
		alignItems: 'center',
		paddingHorizontal: 20,
		top: -avatarImageContainerSize / 2,
		// backgroundColor: 'red',
	};

	const avatarImageContainerStyle: ViewStyle = {
		height: avatarImageContainerSize,
		width: avatarImageContainerSize,
		borderRadius: avatarImageContainerSize / 2,
		borderWidth: 4,
		borderColor: theme.colors.onSurfaceVariant,
		shadowColor: theme.colors.primaryContainer,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.53,
		shadowRadius: 13.97,
		elevation: 21,
	};

	const headerBackgroundAlphaViewStyle: ViewStyle = {
		height: 300,
		position: 'absolute',
		backgroundColor: theme.colors.primaryContainerWithAlpha,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	};

	const headerBackgroundImageStyle: ImageStyle = {
		height: 300,
	};

	return {
		avatarImageWrapperStyle,
		avatarImageContainerStyle,
		headerBackgroundAlphaViewStyle,
		headerBackgroundImageStyle,
	};
};
