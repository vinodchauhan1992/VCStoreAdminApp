import { TextStyle, ViewStyle } from 'react-native';

export default () => {
	const mainContainer: ViewStyle = {
		marginTop: 20,
		// backgroundColor: 'transparent',
		alignItems: 'flex-start',
		flexDirection: 'row',
	};

	const labelText: TextStyle = {
		alignSelf: 'center',
	};

	return {
		mainContainer,
		labelText,
	};
};
