import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import SettingsStyles from './SettingsStyles';
import { Button, Text, useTheme } from 'react-native-paper';
import {
  SettingsOptions,
  ThemeState,
  UI,
  User,
  useAppDispatch,
  useAppSelector,
} from '../../states';
import { VCYCard } from '../../components';
import { SettingsModel } from '../../model/SettingsModel';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Settings = ({ navigation }: any): JSX.Element => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const {
    layout,
    flatListContentContainerStyle,
    signoutButtonContainerStyle,
    signoutButtonStyle,
    signoutButtonTextStyle,
  } = SettingsStyles(theme);

  const settingsDataArr = useAppSelector(SettingsOptions.selectSettingsData);
  const isDarkThemeSelected = useAppSelector(ThemeState.selectSettingsTheme);

  const onPressSignout = async () => {
    dispatch(UI.showLoader(true));
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(UI.showLoader(false));
      dispatch(User.saveUser({}));
    } catch (error) {
      console.error(error);
      dispatch(UI.showLoader(false));
      dispatch(User.saveUser({}));
    }
  };

  const renderVideoCategoriesItem = ({ item, index }: { item: SettingsModel; index: number }) => {
    console.log('item', item);
    if (item.id === 'signout') {
      return (
        <View style={signoutButtonContainerStyle}>
          <Button mode="elevated" style={signoutButtonStyle} onPress={onPressSignout}>
            <Text style={signoutButtonTextStyle}>{item.title}</Text>
          </Button>
        </View>
      );
    }
    return (
      <VCYCard
        key={`${index.toString()}`}
        index={index}
        cardTitle={item?.title ?? ''}
        cardSubtitle={item?.subtitle ?? ''}
        isCancelBtnVisible={false}
        onCardPress={() => navigation.navigate(item.route)}
        iconType={item.iconType}
        onToggleSwitch={(value) => {
          if (item.iconType === 'switch' && item.id === 'dark_theme') {
            dispatch(ThemeState.saveSettingsThemeSchemeData(value));
          }
        }}
        switchValue={isDarkThemeSelected}
      />
    );
  };

  return (
    <SafeAreaView style={layout}>
      <FlatList
        contentContainerStyle={flatListContentContainerStyle}
        data={settingsDataArr ? settingsDataArr : []}
        renderItem={renderVideoCategoriesItem}
      />
    </SafeAreaView>
  );
};

export default Settings;
