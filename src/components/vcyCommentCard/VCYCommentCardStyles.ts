import { TextStyle, ViewStyle } from 'react-native';

export default (theme: any) => {
	const topRowContainer: ViewStyle = {
		flexDirection: 'row',
	};

	const topMiddleColumnContainer: ViewStyle = {
		flex: 1,
		flexDirection: 'column',
		marginHorizontal: 16,
	};

	const topMiddleRowContainer: ViewStyle = {
		flexDirection: 'row',
	};

	const commentPressableIconsWrapperStyle: ViewStyle = {
		flexDirection: 'row',
		marginTop: 20,
	};

	const commonCommentPressableIconsContainerStyle: ViewStyle = {
		flexDirection: 'row',
		marginRight: 20,
	};

	const replyTextWrapperStyle: ViewStyle = {
		marginTop: 25,
		marginBottom: 15,
		alignSelf: 'flex-start',
	};

	const replyTextStyle: TextStyle = {
		textAlign: 'left',
		color: theme.colors.onSecondaryContainer,
	};

	return {
		mainContainer: {
			marginTop: 20,
		},
		topRowContainer,
		topMiddleColumnContainer,
		topMiddleRowContainer,
		avatarImageStyle: {
			marginLeft: 20,
		},
		authorNameTextStyle: {
			flex: 1,
			marginRight: 5,
		},
		rightAccessoryStyle: {
			color: theme.colors.primary,
			marginRight: 20,
		},
		commentPressableIconsWrapperStyle,
		commonCommentPressableIconsContainerStyle,
		likeIconStyle: {
			color: theme.colors.primary,
			marginRight: 5,
		},
		dislikeIconStyle: {
			color: theme.colors.primary,
			marginRight: 5,
		},
		commentIconStyle: {
			color: theme.colors.primary,
			marginRight: 5,
		},
		replyTextWrapperStyle,
		replyTextStyle,
	};
};
