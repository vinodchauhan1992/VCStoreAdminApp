import React from 'react';
import { Image, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import VCYProfileHeaderBackgroundStyles from './VCYProfileHeaderBackgroundStyles';
import { UserModel } from '../../model/UserModel';
import { User, useAppSelector } from '../../states';
import { userAvatar, userStoryDefaultImage } from '../../../assets/images';
import config from '../../config';

const VCYProfileHeaderBackground = () => {
  const theme = useTheme();

  const {
    avatarImageWrapperStyle,
    avatarImageContainerStyle,
    headerBackgroundAlphaViewStyle,
    headerBackgroundImageStyle,
  } = VCYProfileHeaderBackgroundStyles(theme);

  const userData: UserModel | null = useAppSelector(User.selectUser);
  const isUserAvatarValid = userData?.user?.photo && userData.user.photo !== '' ? true : false;

  return (
    <View>
      <Image
        style={headerBackgroundImageStyle}
        source={
          isUserAvatarValid
            ? {
                uri: userData?.user?.photo ?? '',
              }
            : userStoryDefaultImage
        }
      />
      <View style={headerBackgroundAlphaViewStyle} />
      <View style={avatarImageWrapperStyle}>
        <View style={avatarImageContainerStyle}>
          <Avatar.Image
            source={isUserAvatarValid ? { uri: userData?.user?.photo } : userAvatar}
            size={config.constants.profileAvatarImageSize}
          />
        </View>
      </View>
    </View>
  );
};

export default VCYProfileHeaderBackground;
