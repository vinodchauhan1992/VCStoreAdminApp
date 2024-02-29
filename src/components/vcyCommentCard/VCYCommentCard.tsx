import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import VCYCommentCardStyles from './VCYCommentCardStyles';
import { Avatar, Text, useTheme } from 'react-native-paper';
import { userAvatar } from '../../../assets/images';
import config from '../../config';
import moment from 'moment';

export interface VCYCommentCardProps {
  commentIndex?: number | null;
  authorName?: string | null;
  dateOfComment?: string | null;
  commentBody?: string | null;
  avtarImageUrl?: string | null;
  numberOfLikes?: string | null;
  numberOfDislikes?: string | null;
  isLikeVisible?: boolean;
  isDislikeVisible?: boolean;
  isRightAccessoryVisible?: boolean;
  onPressRightAccessory?: (commentIndex: number) => void;
  onLongPressRightAccessory?: (commentIndex: number) => void;
  rightAccessoryIconStyle?: any;
  onPressLike?: (commentIndex: number) => void;
  onPressDislike?: (commentIndex: number) => void;
  onPressAddReply?: (commentIndex: number) => void;
  canReply?: boolean;
  totalReplyCount?: string | null;
  onPressReplyText?: (commentIndex: number) => void;
}

const VCYCommentCard = (props: VCYCommentCardProps) => {
  const {
    commentIndex,
    authorName,
    dateOfComment,
    commentBody,
    avtarImageUrl,
    numberOfLikes,
    numberOfDislikes,
    isRightAccessoryVisible,
    onPressRightAccessory,
    onLongPressRightAccessory,
    rightAccessoryIconStyle,
    onPressLike,
    onPressDislike,
    onPressAddReply,
    canReply,
    totalReplyCount,
    onPressReplyText,
    isLikeVisible = true,
    isDislikeVisible = true,
  } = props;

  const theme = useTheme();

  const {
    mainContainer,
    topRowContainer,
    topMiddleColumnContainer,
    avatarImageStyle,
    topMiddleRowContainer,
    authorNameTextStyle,
    rightAccessoryStyle,
    commentPressableIconsWrapperStyle,
    commonCommentPressableIconsContainerStyle,
    likeIconStyle,
    dislikeIconStyle,
    commentIconStyle,
    replyTextWrapperStyle,
    replyTextStyle,
  } = VCYCommentCardStyles(theme);

  const { MarvelIcons } = config.vectorIcons;

  const getCustomisedDate = () => {
    if (dateOfComment && dateOfComment !== '') {
      var agoDate = moment(dateOfComment, 'YYYYMMDD').fromNow();
      return agoDate;
    }

    return null;
  };

  const renderAvatar = () => {
    return (
      <Avatar.Image
        size={36}
        source={avtarImageUrl && avtarImageUrl !== '' ? { uri: avtarImageUrl } : userAvatar}
        style={avatarImageStyle}
      />
    );
  };

  const renderTopMiddleRow = () => {
    const commentDate = getCustomisedDate();
    return (
      <View style={topMiddleRowContainer}>
        <Text variant="bodyMedium" style={authorNameTextStyle}>
          {`${authorName}${commentDate ? ` . ${commentDate}` : ''}`}
        </Text>
      </View>
    );
  };

  const renderRepliesText = () => {
    if (totalReplyCount && totalReplyCount !== '0') {
      const repliesText = totalReplyCount === '1' ? 'reply' : 'replies';
      return (
        <TouchableOpacity
          onPress={() => onPressReplyText?.(commentIndex ?? 0)}
          style={replyTextWrapperStyle}>
          <Text
            variant="labelMedium"
            style={replyTextStyle}>{`${totalReplyCount}  ${repliesText}`}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderPressableIcons = () => {
    if (canReply || isLikeVisible || isDislikeVisible) {
      return (
        <View style={commentPressableIconsWrapperStyle}>
          {isLikeVisible ? (
            <TouchableOpacity
              style={commonCommentPressableIconsContainerStyle}
              onPress={() => onPressLike?.(commentIndex ?? 0)}>
              <MarvelIcons name="like" size={18} style={likeIconStyle} />
              {numberOfLikes && numberOfLikes !== '' && numberOfLikes !== '0' ? (
                <Text variant="labelSmall">1</Text>
              ) : null}
            </TouchableOpacity>
          ) : null}
          {isDislikeVisible ? (
            <TouchableOpacity
              onPress={() => onPressDislike?.(commentIndex ?? 0)}
              style={commonCommentPressableIconsContainerStyle}>
              <MarvelIcons name="thumbs-down1" size={20} style={dislikeIconStyle} />
              {numberOfDislikes && numberOfDislikes !== '' && numberOfDislikes !== '0' ? (
                <Text variant="labelSmall">2</Text>
              ) : null}
            </TouchableOpacity>
          ) : null}
          {canReply ? (
            <TouchableOpacity
              onPress={() => onPressAddReply?.(commentIndex ?? 0)}
              style={commonCommentPressableIconsContainerStyle}>
              <MarvelIcons name="comment2" size={18} style={commentIconStyle} />
            </TouchableOpacity>
          ) : null}
        </View>
      );
    }
    return null;
  };

  const renderTopMiddleColumnContainer = () => {
    return (
      <View style={topMiddleColumnContainer}>
        {renderTopMiddleRow()}
        <Text variant="labelMedium">
          {commentBody}
        </Text>
        {renderPressableIcons()}
        {renderRepliesText()}
      </View>
    );
  };

  const renderRightAccessory = () => {
    if (!isRightAccessoryVisible) {
      return null;
    }
    return (
      <TouchableOpacity
        onPress={() => onPressRightAccessory?.(commentIndex ?? 0)}
        onLongPress={() => onLongPressRightAccessory?.(commentIndex ?? 0)}>
        <MarvelIcons
          name="dots-three-vertical"
          size={18}
          style={[rightAccessoryStyle, rightAccessoryIconStyle]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={mainContainer}>
      <View style={topRowContainer}>
        {renderAvatar()}
        {renderTopMiddleColumnContainer()}
        {renderRightAccessory()}
      </View>
    </View>
  );
};

export default VCYCommentCard;
