import React from 'react';
import { Pressable, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import VCYNavigationHeaderButtonStyle from './VCYNavigationHeaderButtonStyle';
import config from '../../config';
import {Text, useTheme} from 'react-native-paper';

export interface VCYNavigationHeaderButtonProps {
  /* as a string for either text or icon for right side */
  accessory?: string;
  /* as a function for pressing left accessory icon or text */
  onPressAccessory?: () => void;
  /* as a function for long pressing left accessory icon or text */
  onLongPressAccessory?: () => void;
  /* as an object of iconstyle props for accessory */
  iconAccessoryStyle?: any;
  /* as an object of textstyle props for accessory */
  textAccessoryStyle?: StyleProp<TextStyle>;
  /* as a boolean for knowing if accessory passed is an icon */
  isAccessoryIcon?: boolean;
  /* as an object of style for container */
  buttonContainerStyle?: StyleProp<ViewStyle>;
  /* as a boolean to disable or enable a button (by default false)*/
  isDisabled?: boolean;
}

const VCYNavigationHeaderButton = (props: VCYNavigationHeaderButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    accessory,
    onPressAccessory,
    onLongPressAccessory,
    iconAccessoryStyle,
    textAccessoryStyle,
    isAccessoryIcon = true,
    buttonContainerStyle,
    isDisabled = false,
  } = props;

  const {
    container,
    iconAccessory,
    disabledAccessory,
    notificationContainer,
    count,
    textAccessory,
  } = VCYNavigationHeaderButtonStyle(theme);
  const { MarvelIcons } = config.vectorIcons;

  const notificationCount = 0;
  return (
    <Pressable
      style={[container, buttonContainerStyle]}
      disabled={isDisabled}
      onPress={(): void => onPressAccessory?.()}
      onLongPress={(): void => onLongPressAccessory?.()}>
      {isAccessoryIcon && accessory && accessory !== '' ? (
        <>
          <MarvelIcons
            name={accessory}
            style={
              isDisabled
                ? [iconAccessory, disabledAccessory, iconAccessoryStyle]
                : [iconAccessory, iconAccessoryStyle]
            }
          />
          {notificationCount > 0 && (
            <View style={notificationContainer}>
              <Text style={count}>{notificationCount > 99 ? '99+' : `${notificationCount}`}</Text>
            </View>
          )}
        </>
      ) : null}
      {!isAccessoryIcon && accessory && accessory !== '' ? (
        <Text
          numberOfLines={1}
          variant="bodyMedium"
          style={
            isDisabled
              ? [textAccessory, disabledAccessory, textAccessoryStyle]
              : [textAccessory, textAccessoryStyle]
          }>
          {accessory}
        </Text>
      ) : null}
    </Pressable>
  );
};

export default VCYNavigationHeaderButton;
