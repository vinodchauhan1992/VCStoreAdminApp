import { Dimensions, ViewStyle } from 'react-native';

export default () => {
	const dateTimeTextWrapperStyle: ViewStyle = {
		flexDirection: 'row',
		marginTop: 10,
	};

	return {
		layout: { flex: 1 },
		imageSizeStyle: {
			height: 200,
			width: Dimensions.get('window').width,
		},
		mainDetailsViewWrapperStyle: {
			paddingHorizontal: 20,
			paddingVertical: 20,
		},
		detailsTextStyle: {
			marginTop: 10,
		},
		commentsHeadingTextStyle: {
			marginBottom: 10,
		},
		dateTimeTextWrapperStyle,
		commentsSectionMainContainerStyle: {
			paddingVertical: 20,
			paddingHorizontal: 20,
		},
		overrideCardMainContainerStyle: {
			marginTop: 10,
			marginHorizontal: 0,
		},
	};
};
