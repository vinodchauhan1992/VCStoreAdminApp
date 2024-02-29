import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import VCYCardStyles from './VCYCardStyles';
import { Button, Card, Switch, Text, useTheme } from 'react-native-paper';
import { SettingsIconType } from '../../model/SettingsModel';
import config from '../../config';

export interface VCYCardProps {
  index?: number;
  cardTitle?: string;
  cardSubtitle?: string;
  cardCoverSource?: { uri: string };
  cardCancelBtnTitle?: string;
  cardContinueBtnTitle?: string;
  cardCancelBtnPress?: (index?: number) => void;
  cardContinueBtnPress?: (index?: number) => void;
  onCardPress?: (index?: number) => void;
  overrideMainContainerStyle?: StyleProp<ViewStyle>;
  isCancelBtnVisible?: boolean;
  isContinueBtnVisible?: boolean;
  iconType?: SettingsIconType;
  switchValue?: boolean;
  onToggleSwitch?: (value: boolean, index?: number) => void;
}

const VCYCard = (props: VCYCardProps): JSX.Element | null => {
  const theme = useTheme();

  const {
    mainContainerStyle,
    cardContentStyle,
    cardActionsStyle,
    cardContentRowWrapperStyle,
    cardContentColumnWrapperStyle,
    buttonColor,
    buttonTextColor,
    chevronIconStyle,
  } = VCYCardStyles(theme);

  const {
    index,
    cardTitle,
    cardSubtitle,
    cardCoverSource,
    cardCancelBtnTitle,
    cardContinueBtnTitle,
    cardCancelBtnPress,
    cardContinueBtnPress,
    isCancelBtnVisible = true,
    isContinueBtnVisible = true,
    overrideMainContainerStyle,
    onCardPress,
    iconType,
    switchValue,
    onToggleSwitch,
  } = props;

  const isCardTitleValid = cardTitle && cardTitle !== '' ? true : false;
  const isCardSubtitleValid = cardSubtitle && cardSubtitle !== '' ? true : false;
  const isCardContentValid = isCardTitleValid || isCardSubtitleValid ? true : false;
  const isCancelBtnValid =
    isCancelBtnVisible && cardCancelBtnPress && cardCancelBtnTitle && cardCancelBtnTitle !== ''
      ? true
      : false;
  const isContinueBtnValid =
    isContinueBtnVisible &&
    cardContinueBtnPress &&
    cardContinueBtnTitle &&
    cardContinueBtnTitle !== ''
      ? true
      : false;
  const isCardActionsValid = isCancelBtnValid || isContinueBtnValid ? true : false;

  const { MarvelIcons } = config.vectorIcons;

  const renderChevronIcon = () => {
    return <MarvelIcons name="keyboard_arrow_right" size={20} style={chevronIconStyle} />;
  };

  const renderSwitch = () => {
    return <Switch value={switchValue} onValueChange={(value) => onToggleSwitch?.(value, index)} />;
  };

  const renderRightAccessory = () => {
    if (
      isCardActionsValid ||
      (cardCoverSource?.uri && cardCoverSource.uri !== '') ||
      cardCoverSource
    ) {
      return null;
    }

    switch (iconType) {
      case 'chevron':
        return renderChevronIcon();

      case 'switch':
        return renderSwitch();

      default:
        return null;
    }
  };

  const renderCardContent = () => {
    if (!isCardContentValid) {
      return null;
    }
    return (
      <Card.Content style={cardContentStyle}>
        <View style={cardContentRowWrapperStyle}>
          <View style={cardContentColumnWrapperStyle}>
            {isCardTitleValid ? <Text variant="titleLarge">{cardTitle}</Text> : null}
            {isCardSubtitleValid ? <Text variant="bodyLarge">{cardSubtitle}</Text> : null}
          </View>
          {renderRightAccessory()}
        </View>
      </Card.Content>
    );
  };

  const renderCardActions = () => {
    if (!isCardActionsValid) {
      return null;
    }
    return (
      <Card.Actions style={cardActionsStyle}>
        {isCancelBtnValid ? (
          <Button onPress={() => cardCancelBtnPress?.(index ? index : 0)}>
            {cardCancelBtnTitle}
          </Button>
        ) : null}
        {isContinueBtnValid ? (
          <Button
            // buttonColor={buttonColor.color}
            // textColor={buttonTextColor.color}
            onPress={() => cardContinueBtnPress?.(index ? index : 0)}>
            {cardContinueBtnTitle}
          </Button>
        ) : null}
      </Card.Actions>
    );
  };

  const renderCardCover = () => {
    if ((cardCoverSource?.uri && cardCoverSource.uri !== '') || cardCoverSource) {
      return <Card.Cover source={cardCoverSource} />;
    }
    return null;
  };

  return (
    <View style={[mainContainerStyle, overrideMainContainerStyle]}>
      <Card onPress={() => onCardPress?.(index)}>
        {renderCardCover()}
        {renderCardContent()}
        {renderCardActions()}
      </Card>
    </View>
  );
};

export default VCYCard;
