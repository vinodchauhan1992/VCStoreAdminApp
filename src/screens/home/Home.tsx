import React, { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import HomeStyles from './HomeStyles';
import { VCSACard } from '../../components';
import { AdminMenusState, SettingsOptions, useAppDispatch, useAppSelector } from '../../states';
import config from '../../config';
import { youtubeImagePlaceholder } from '../../../assets/images';
import { settingsUtils } from '../../utils';
import { AdminMenuDataModel } from '../../model/AdminMenuModel';

const Home = ({ navigation }: any): JSX.Element => {
  const { layout, flatListContentContainerStyle } = HomeStyles();

  const dispatch = useAppDispatch();

  const adminMenusArr: AdminMenuDataModel[] = useAppSelector(
    AdminMenusState.selectAdminMenusDataArraySelector,
  );

  const getDashboardData = () => {
    dispatch({ type: 'GET_ALL_ADMIN_MENUS', payload: {} });
  };

  const addSettings = () => {
    dispatch(SettingsOptions.saveSettingsData(settingsUtils.getSettingsData()));
  };

  useEffect(() => {
    addSettings();
    getDashboardData();
  }, []);

  const onCardPress = (item: any) => {};

  const renderVideoCategoriesItem = ({
    item,
    index,
  }: {
    item: AdminMenuDataModel;
    index: number;
  }) => {
    return (
      <VCSACard
        key={`${index.toString()}`}
        index={index}
        cardTitle={item?.menuTitle ?? ''}
        onCardPress={() => onCardPress(item)}
        iconType="chevron"
        cardSubtitle={item?.description ?? ''}
        // cardSubtitle={`Channel id: ${item?.snippet?.channelId ?? ''}`}
        // cardCoverSource={youtubeImagePlaceholder}
        // cardContinueBtnTitle="Go to category"
        // cardContinueBtnPress={(index) => reactotron.log('cardContinueBtnPress', index)}
        isCancelBtnVisible={false}
      />
    );
  };

  return (
    <SafeAreaView style={layout}>
      <FlatList
        contentContainerStyle={flatListContentContainerStyle}
        data={adminMenusArr}
        renderItem={renderVideoCategoriesItem}
      />
    </SafeAreaView>
  );
};

export default Home;
