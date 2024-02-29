import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, useTheme, Divider } from 'react-native-paper';
import ProfileStyles from './ProfileStyles';
import { User, useAppSelector } from '../../states';
import { UserModel } from '../../model/UserModel';

const Profile = () => {
  const theme = useTheme();
  const {
    layout,
    mainWrapperStyle,
    headingWrapperStyle,
    fieldsMainWrapperStyle,
    fieldsLabelStyle,
    fieldsStyle,
    fieldWrapperStyle,
    dividerStyle,
  } = ProfileStyles(theme);

  const userData: UserModel | null = useAppSelector(User.selectUser);
  // const isUserAvatarValid = userData?.user?.photo && userData.user.photo !== '' ? true : false;

  return (
    <SafeAreaView style={layout}>
      <ScrollView>
        <View style={mainWrapperStyle}>
          <View style={headingWrapperStyle}>
            <Text variant="displaySmall">{userData?.user?.name}</Text>
            <Text variant="labelMedium">{userData?.user?.id}</Text>
          </View>
          <View style={fieldsMainWrapperStyle}>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Given name
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {userData?.user?.givenName}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Family name
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {userData?.user?.familyName}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Email address
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {userData?.user?.email}
              </Text>
              <Divider style={dividerStyle} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
