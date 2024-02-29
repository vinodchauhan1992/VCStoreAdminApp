import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, View } from 'react-native';
import VideoStyles from './VideoStyles';
import { CommentThreads, SelectedVideo, useAppDispatch, useAppSelector } from '../../states';
import { Divider, Text } from 'react-native-paper';
import moment from 'moment';
import { VCYCard } from '../../components';
import config from '../../config';

const Video = ({ navigation }: any): JSX.Element => {
  const {
    layout,
    imageSizeStyle,
    mainDetailsViewWrapperStyle,
    detailsTextStyle,
    dateTimeTextWrapperStyle,
    commentsHeadingTextStyle,
    commentsSectionMainContainerStyle,
    overrideCardMainContainerStyle,
  } = VideoStyles();

  const dispatch = useAppDispatch();
  const videoTitle = useAppSelector(SelectedVideo.selectSelectedVideoTitle);
  const videoData = useAppSelector(SelectedVideo.selectSelectedVideoData);
  const commentThreadsData = useAppSelector(CommentThreads.selectCommentThreadsListData);
  const commentThreadsEtagData = useAppSelector(CommentThreads.selectCommentThreadsEtagData);

  const [tagsString, setTagsString] = useState('');
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isTagsValid, setIsTagsValid] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: videoTitle });
  }, [videoTitle]);

  useEffect(() => {
    dispatch({
      type: 'GET_COMMENT_THREADS',
      payload: { videoID: videoData?.id },
    });
    if (videoData?.snippet?.tags && videoData.snippet.tags.length > 0) {
      let tagString = 'Tags: ';
      videoData.snippet.tags.map((tag) => {
        tagString = `${tagString}, ${tag}`;
      });
      setTagsString(tagString);
    }
    if (videoData?.snippet?.description && videoData.snippet.description !== '') {
      setIsDescriptionValid(true);
    }
  }, [videoData]);

  useEffect(() => {
    if (tagsString && tagsString !== '') {
      setIsTagsValid(true);
    }
  }, [tagsString]);

  const renderDateTime = () => {
    if (videoData?.snippet?.publishedAt && videoData.snippet.publishedAt !== '') {
      const date = moment(videoData?.snippet?.publishedAt).format('YYYY-MM-DD');
      const time = moment(videoData?.snippet?.publishedAt).format('hh:mm:ss a');
      return (
        <View style={dateTimeTextWrapperStyle}>
          <Text variant="bodyMedium">{`${date} at ${time}`}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={layout}>
      <Image
        height={imageSizeStyle.height}
        width={imageSizeStyle.width}
        source={{ uri: videoData?.snippet?.thumbnails?.standard?.url ?? '' }}
      />
      <ScrollView>
        <View style={mainDetailsViewWrapperStyle}>
          <Text variant="titleLarge">{videoData?.snippet?.title}</Text>
          {isDescriptionValid || isTagsValid ? (
            <VCYCard
              overrideMainContainerStyle={overrideCardMainContainerStyle}
              cardTitle={videoData?.snippet?.description ?? ''}
              cardSubtitle={tagsString}
            />
          ) : null}
          {renderDateTime()}
        </View>
        <Divider />
        {commentThreadsEtagData?.pageInfo?.totalResults &&
        commentThreadsEtagData.pageInfo.totalResults > 0 ? (
          <VCYCard
            cardTitle={`${commentThreadsEtagData.pageInfo.totalResults} Comments`}
            cardSubtitle={`${
              commentThreadsData?.[commentThreadsData?.length ? commentThreadsData.length - 1 : 0]
                ?.snippet?.topLevelComment?.snippet?.textDisplay
            }`}
            onCardPress={() => navigation.navigate(config.routes.COMMENTS)}
          />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Video;
