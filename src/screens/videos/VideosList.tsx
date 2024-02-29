import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import VideosListStyles from './VideosListStyles';
import { VCYCard } from '../../components';
import { SelectedVideoCategory, VideoList, useAppDispatch, useAppSelector } from '../../states';
import { VideoListItemsModel } from '../../model/VideoListModel';
import {
  saveSelectedVideoListData,
  saveSelectedVideoListEtagData,
} from '../../states/SelectedVideo';
import config from '../../config';

const VideosList = ({ navigation }: any): JSX.Element => {
  const { layout, flatListContentContainerStyle } = VideosListStyles();

  const dispatch = useAppDispatch();
  const videoListData = useAppSelector(VideoList.selectVideoListData);
  const videoListEtagData = useAppSelector(VideoList.selectVideoListEtagData);
  const videoCategoryID = useAppSelector(SelectedVideoCategory.selectSelectedVideoCategoryID);
  const videoCategoryName = useAppSelector(SelectedVideoCategory.selectSelectedVideoCategoryName);
  const isToReloadVideoList = useAppSelector(SelectedVideoCategory.selectIsToReloadVideoList);

  useEffect(() => {
    if (isToReloadVideoList) {
      dispatch({
        type: 'GET_VIDEO_LIST',
        payload: { videoCategoryId: videoCategoryID },
      });
    }
  }, [videoCategoryID]);

  useEffect(() => {
    navigation.setOptions({ title: videoCategoryName });
  }, [videoCategoryName]);

  const onCardPress = (item: VideoListItemsModel) => {
    dispatch(saveSelectedVideoListData(item));
    dispatch(saveSelectedVideoListEtagData(videoListEtagData));
    navigation.navigate(config.routes.VIDEO);
  };

  const renderVideoListItem = ({ item, index }: { item: VideoListItemsModel; index: number }) => {
    return (
      <VCYCard
        key={`${index.toString()}`}
        index={index}
        cardTitle={item?.snippet?.title ?? ''}
        onCardPress={() => onCardPress(item)}
        cardSubtitle={`By ${item?.snippet?.channelTitle ?? ''}`}
        cardCoverSource={{ uri: item?.snippet?.thumbnails?.standard?.url ?? '' }}
        isCancelBtnVisible={false}
      />
    );
  };

  return (
    <SafeAreaView style={layout}>
      <FlatList
        contentContainerStyle={flatListContentContainerStyle}
        data={videoListData ? videoListData : []}
        renderItem={renderVideoListItem}
      />
    </SafeAreaView>
  );
};

export default VideosList;
