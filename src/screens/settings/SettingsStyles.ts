import { ViewStyle } from 'react-native';

export default (theme: any) => {
	const signoutButtonContainerStyle: ViewStyle = {
		alignItems: 'center',
		marginTop: 20,
		marginHorizontal: 16,
	};

	// const signoutButtonStyle: ViewStyle = {
	// 	alignItems: 'center',
	// 	marginTop: 20,
	// 	marginHorizontal: 16,
	// };

	return {
		layout: { flex: 1 },
		flatListContentContainerStyle: { paddingBottom: 30, paddingTop: 20 },
		signoutButtonContainerStyle,
		signoutButtonStyle: {
			backgroundColor: theme.colors.error,
		},
		signoutButtonTextStyle: {
			color: theme.colors.onError,
		},
	};
};
