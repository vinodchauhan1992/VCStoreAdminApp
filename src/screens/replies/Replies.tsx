import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import RepliesStyles from './RepliesStyles';
import { SelectedReplies, useAppSelector } from '../../states';
import { VCYCommentCard } from '../../components';
import { RepliedCommentModel } from '../../model/CommentThreadsModel';

const Replies = (): JSX.Element => {
  const { layout, flatListContentContainerStyle, flatListReplyCardStyle } = RepliesStyles();

  const selectedCommentData = useAppSelector(SelectedReplies.selectSelectedReplyData);

  const [repliesData, setRepliesData] = useState<any>([]);

  useEffect(() => {
    let updatedRepliesData: any = [];
    updatedRepliesData.push(selectedCommentData?.snippet?.topLevelComment);
    const repliesDataArr = selectedCommentData?.replies?.comments ?? [];
    updatedRepliesData = [...updatedRepliesData, ...repliesDataArr];
    console.log('updatedRepliesData', updatedRepliesData);
    setRepliesData(updatedRepliesData);
  }, [selectedCommentData]);

  const renderReplyThreadItem = ({ item, index }: { item: RepliedCommentModel; index: number }) => {
    if (index === 0) {
      return (
        <VCYCommentCard
          commentIndex={0}
          authorName={item?.snippet?.authorDisplayName}
          commentBody={item?.snippet?.textDisplay}
          avtarImageUrl={item?.snippet?.authorProfileImageUrl}
          isDislikeVisible={true}
          isLikeVisible={true}
          numberOfLikes={`${item?.snippet?.likeCount}`}
          totalReplyCount={'0'}
          dateOfComment={item?.snippet?.updatedAt}
        />
      );
    }
    return (
      <View style={flatListReplyCardStyle}>
        <VCYCommentCard
          key={`${index.toString()}`}
          commentIndex={index}
          authorName={item?.snippet?.authorDisplayName}
          commentBody={item?.snippet?.textDisplay}
          avtarImageUrl={item?.snippet?.authorProfileImageUrl}
          numberOfLikes={`${item?.snippet?.likeCount}`}
          totalReplyCount={'0'}
          dateOfComment={item?.snippet?.updatedAt}
          canReply={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={layout}>
      <FlatList
        contentContainerStyle={flatListContentContainerStyle}
        data={repliesData ?? []}
        renderItem={renderReplyThreadItem}
      />
    </SafeAreaView>
  );
};

export default Replies;
