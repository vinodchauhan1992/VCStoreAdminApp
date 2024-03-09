import React from 'react';
import { Image, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import VCSAProfileHeaderBackgroundStyles from './VCSAProfileHeaderBackgroundStyles';
import { LoginState, useAppSelector } from '../../states';
import { userAvatar, userStoryDefaultImage } from '../../../assets/images';
import config from '../../config';
import { LoggedInUserModel } from '../../model/LoggedInUserModel';
import { MainStateTypes } from '../../types/statesTypes';

const VCSAProfileHeaderBackground = () => {
  const theme = useTheme();

  const {
    avatarImageWrapperStyle,
    avatarImageContainerStyle,
    headerBackgroundAlphaViewStyle,
    headerBackgroundImageStyle,
  } = VCSAProfileHeaderBackgroundStyles(theme);

  const loggedInUserData: LoggedInUserModel | null = useAppSelector((state: any) =>
    LoginState.selectLoggedInUser(state),
  );
  const isUserAvatarValid =
    loggedInUserData?.user?.imageData?.imageUrl && loggedInUserData.user.imageData.imageUrl !== ''
      ? true
      : false;

  return (
    <View>
      <Image
        style={headerBackgroundImageStyle}
        source={
          isUserAvatarValid
            ? {
                uri: loggedInUserData?.user?.imageData?.imageUrl ?? '',
              }
            : userStoryDefaultImage
        }
      />
      <View style={headerBackgroundAlphaViewStyle} />
      <View style={avatarImageWrapperStyle}>
        <View style={avatarImageContainerStyle}>
          <Avatar.Image
            onLoadStart={() => console.log('onLoadStart')}
            onLoadEnd={() => console.log('onLoadEnd')}
            source={
              isUserAvatarValid ? { uri: loggedInUserData?.user?.imageData?.imageUrl } : userAvatar
            }
            size={config.constants.profileAvatarImageSize}
          />
        </View>
      </View>
    </View>
  );
};

export default VCSAProfileHeaderBackground;
