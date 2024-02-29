import { TextStyle, ViewStyle } from 'react-native';
import config from '../../config';

export default (theme: any) => {
	const mainWrapperStyle: ViewStyle = {
		flex: 1,
		marginTop: 280,
		marginHorizontal: 20,
	};

	const headingWrapperStyle: ViewStyle = {
		alignItems: 'center',
	};

	const fieldsMainWrapperStyle: ViewStyle = {
		marginTop: 50,
	};

	const fieldWrapperStyle: ViewStyle = {
		marginBottom: 20,
	};

	const fieldsLabelStyle: TextStyle = { marginBottom: 10 };
	const fieldsStyle: TextStyle = { marginBottom: 10 };

	return {
		layout: { flex: 1 },
		mainWrapperStyle,
		headingWrapperStyle,
		fieldsMainWrapperStyle,
		fieldWrapperStyle,
		fieldsLabelStyle,
		fieldsStyle,
		dividerStyle: {
			backgroundColor: theme.colors.onSurfaceVariant,
		},
	};
};
