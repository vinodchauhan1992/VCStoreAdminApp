import React, { useEffect } from 'react';
import { Alert, SafeAreaView, TouchableOpacity, View } from 'react-native';
import LoginStyles from './LoginStyles';
import { Surface, Text, Button, Snackbar } from 'react-native-paper';
import config from '../../config';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { authUtils } from '../../utils';
import { UI, User, useAppDispatch } from '../../states';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }: any): JSX.Element => {
  const {
    layout,
    surface,
    mainHeadingText,
    subHeadingText,
    googleSigninButtonStyle,
    googleSigninButtonWrapperStyle,
  } = LoginStyles();

  const dispatch = useAppDispatch();

  useEffect(() => {
    authUtils.configureGoogleSignIn();
  });

  const onLoginPress = async () => {
    dispatch(UI.showLoader(true));
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        userInfo?.idToken,
        userInfo?.serverAuthCode ?? '',
      );
      await auth().signInWithCredential(credential);
      dispatch(User.saveUser(userInfo));
      dispatch(UI.showLoader(false));
    } catch (error: any) {
      dispatch(UI.showLoader(false));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Error!', 'User cancelled the login flow', [{ text: 'Ok' }]);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error!', 'Play services not available', [{ text: 'Ok' }]);
      } else {
        Alert.alert(
          'Error!',
          `Some error occurred. Please try again later. Code: ${error.code}, Message: ${error.message}`,
          [{ text: 'Ok' }],
        );
      }
    }
  };

  return (
    <SafeAreaView style={layout}>
      <Surface style={surface} elevation={2}>
        <Text variant="displaySmall" style={mainHeadingText}>
          Welcome!
        </Text>
        <Text variant="titleSmall" style={subHeadingText}>
          Create or Login to your account
        </Text>
        <View style={googleSigninButtonWrapperStyle}>
          <GoogleSigninButton
            style={googleSigninButtonStyle}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={onLoginPress}
          />
        </View>
      </Surface>
    </SafeAreaView>
  );
};

export default Login;
