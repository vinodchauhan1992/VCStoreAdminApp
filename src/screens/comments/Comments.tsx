import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import CommentsStyles from './CommentsStyles';
import { CommentThreads, useAppDispatch, useAppSelector } from '../../states';
import { VCYCommentCard } from '../../components';
import { CommentThreadsItemsModel } from '../../model/CommentThreadsModel';
import config from '../../config';
import { saveSelectedReplyData } from '../../states/SelectedReplies';

const Comments = ({ navigation }: any): JSX.Element => {
  const { layout, flatListContentContainerStyle } = CommentsStyles();

  const dispatch = useAppDispatch();

  const commentThreadsData = useAppSelector(CommentThreads.selectCommentThreadsListData);

  const renderCommentThreadItem = ({
    item,
    index,
  }: {
    item: CommentThreadsItemsModel;
    index: number;
  }) => {
    return (
      <VCYCommentCard
        key={`${index.toString()}`}
        commentIndex={index}
        authorName={item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        commentBody={item?.snippet?.topLevelComment?.snippet?.textDisplay}
        avtarImageUrl={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        numberOfLikes={`${item?.snippet?.topLevelComment?.snippet?.likeCount}`}
        totalReplyCount={`${item?.snippet?.totalReplyCount}`}
        onPressReplyText={() => {
          dispatch(saveSelectedReplyData(item));
          navigation.navigate(config.routes.REPLIES);
        }}
        dateOfComment={item?.snippet?.topLevelComment?.snippet?.updatedAt}
        canReply={item?.snippet?.canReply}
      />
    );
  };

  return (
    <SafeAreaView style={layout}>
      <FlatList
        contentContainerStyle={flatListContentContainerStyle}
        data={commentThreadsData ? commentThreadsData : []}
        renderItem={renderCommentThreadItem}
      />
    </SafeAreaView>
  );
};

export default Comments;
