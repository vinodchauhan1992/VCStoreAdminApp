import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';
import VCYDatePickerStyles from './VCYDatePickerStyles';
import RNDateTimePicker, {
  BaseProps,
  AndroidNativeProps,
  IOSNativeProps,
} from '@react-native-community/datetimepicker';

export interface VCYDatePickerProps extends BaseProps {
  nativeProps?: AndroidNativeProps | IOSNativeProps;
  mainContainerStyle?: StyleProp<ViewStyle>;
}

const VCYDatePicker = (props: VCYDatePickerProps): JSX.Element => {
  const {value, nativeProps, ...restProps} = props;

  const {mainContainer, labelText} = VCYDatePickerStyles();

  return (
    <View style={mainContainer}>
      <Text variant="labelLarge" style={labelText}>Date of birth:- </Text>
      <RNDateTimePicker
        value={value}
        {...nativeProps}
        {...restProps}
        // style={dateOfBirthField}
      />
    </View>
  );
};

export default VCYDatePicker;
