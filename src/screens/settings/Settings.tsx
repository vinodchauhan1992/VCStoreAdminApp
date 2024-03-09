import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import SettingsStyles from './SettingsStyles';
import { Button, Text, useTheme } from 'react-native-paper';
import {
  LoginState,
  SettingsOptions,
  ThemeState,
  UI,
  useAppDispatch,
  useAppSelector,
} from '../../states';
import { VCSACard } from '../../components';
import { SettingsModel } from '../../model/SettingsModel';

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
    dispatch(LoginState.saveLoggedInUser(null));
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
      <VCSACard
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
