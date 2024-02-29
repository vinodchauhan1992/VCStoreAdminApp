import React, { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import HomeStyles from './HomeStyles';
import { Text } from 'react-native-paper';
import { VCYCard } from '../../components';
import reactotron from 'reactotron-react-native';
import {
  RootState,
  SettingsOptions,
  UI,
  User,
  VideoCategories,
  useAppDispatch,
  useAppSelector,
} from '../../states';
import { VideoCategoriesModel } from '../../model/VideoCategoriesModel';
import config from '../../config';
import { youtubeImagePlaceholder } from '../../../assets/images';
import { settingsUtils } from '../../utils';
import {
  saveSelectedVideoCategoryIDData,
  saveSelectedVideoCategoryNameData,
} from '../../states/SelectedVideoCategory';

const Home = ({ navigation }: any): JSX.Element => {
  const { layout, flatListContentContainerStyle } = HomeStyles();

  const dispatch = useAppDispatch();
  const videoCategoriesEtag = useAppSelector(VideoCategories.selectVideoCategoriesEtag);
  const videoCategoriesData = useAppSelector(VideoCategories.selectVideoCategoriesData);

  const addSettings = () => {
    dispatch(SettingsOptions.saveSettingsData(settingsUtils.getSettingsData()));
  };

  useEffect(() => {
    if (!videoCategoriesEtag || videoCategoriesEtag === '') {
      dispatch({ type: 'GET_VIDEO_CATEGORIES', payload: {} });
    }
    addSettings();
  }, []);

  const onCardPress = (item: VideoCategoriesModel) => {
    dispatch(saveSelectedVideoCategoryIDData(item?.id));
    dispatch(saveSelectedVideoCategoryNameData(item?.snippet?.title));
    navigation.navigate(config.routes.VIDEOS_LIST);
  };

  const renderVideoCategoriesItem = ({
    item,
    index,
  }: {
    item: VideoCategoriesModel;
    index: number;
  }) => {
    return (
      <VCYCard
        key={`${index.toString()}`}
        index={index}
        cardTitle={item?.snippet?.title ?? ''}
        onCardPress={() => onCardPress(item)}
        // cardSubtitle={`Channel id: ${item?.snippet?.channelId ?? ''}`}
        cardCoverSource={youtubeImagePlaceholder}
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
        data={videoCategoriesData ? videoCategoriesData : []}
        renderItem={renderVideoCategoriesItem}
      />
    </SafeAreaView>
  );
};

export default Home;
