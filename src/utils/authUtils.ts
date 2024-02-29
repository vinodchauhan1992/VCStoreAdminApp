import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from '../config';

export const configureGoogleSignIn = () => {
	const { constants } = config;
	GoogleSignin.configure({
		webClientId: constants.oauthWebClientID,
		offlineAccess: constants.oauthOfflineAccess,
		forceCodeForRefreshToken: constants.forceCodeForRefreshToken,
		// iosClientId: constants.oauthIOSClientID,
		profileImageSize: constants.googleProfileImageSize,
		scopes: constants.googleAuthScopes,
	});
};
