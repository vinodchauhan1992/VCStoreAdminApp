import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Text, useTheme, Divider } from 'react-native-paper';
import ProfileStyles from './ProfileStyles';
import { LoginState, useAppSelector } from '../../states';
import { LoggedInUserModel } from '../../model/LoggedInUserModel';

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

  const loggedInUserData: LoggedInUserModel | null = useAppSelector(LoginState.selectLoggedInUser);

  const getAddressDetails = () => {
    let address = 'N/A';
    let city = 'N/A';
    let state = 'N/A';
    let zipcode = 'N/A';
    if (loggedInUserData?.user?.address?.address && loggedInUserData.user.address.address != '') {
      address = loggedInUserData.user.address.address;
    }
    if (loggedInUserData?.user?.address?.city && loggedInUserData.user.address.city != '') {
      city = loggedInUserData.user.address.city;
    }
    if (loggedInUserData?.user?.address?.state && loggedInUserData.user.address.state != '') {
      state = loggedInUserData.user.address.state;
    }
    if (loggedInUserData?.user?.address?.zipcode && loggedInUserData.user.address.zipcode != '') {
      zipcode = loggedInUserData.user.address.zipcode;
    }
    return { address, city, state, zipcode };
  };

  return (
    <SafeAreaView style={layout}>
      <ScrollView>
        <View style={mainWrapperStyle}>
          <View style={headingWrapperStyle}>
            <Text variant="displaySmall">{`${loggedInUserData?.user?.name?.firstname} ${loggedInUserData?.user?.name?.lastname}`}</Text>
            <Text variant="labelMedium">{loggedInUserData?.user?.userRole}</Text>
            <Text variant="labelMedium">{loggedInUserData?.user?.userStatus}</Text>
          </View>
          <View style={fieldsMainWrapperStyle}>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Status
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.userStatus}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Role
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.userRole}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                First name
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.name?.firstname}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Last name
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.name?.lastname}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Username
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.username}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Email address
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {loggedInUserData?.user?.email}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Date of birth
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${loggedInUserData?.user?.dateOfBirth}`}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Phone
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${loggedInUserData?.user?.phone}`}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Address
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${getAddressDetails().address}`}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                City
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${getAddressDetails().city}`}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                State
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${getAddressDetails().state}`}
              </Text>
              <Divider style={dividerStyle} />
            </View>
            <View style={fieldWrapperStyle}>
              <Text variant="labelLarge" style={fieldsLabelStyle}>
                Zipcode
              </Text>
              <Text variant="labelMedium" style={fieldsStyle}>
                {`${getAddressDetails().zipcode}`}
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
