import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import VCSADatePickerStyles from './VCSADatePickerStyles';
import RNDateTimePicker, {
  BaseProps,
  AndroidNativeProps,
  IOSNativeProps,
} from '@react-native-community/datetimepicker';

export interface VCSADatePickerProps extends BaseProps {
  nativeProps?: AndroidNativeProps | IOSNativeProps;
  mainContainerStyle?: StyleProp<ViewStyle>;
}

const VCSADatePicker = (props: VCSADatePickerProps): JSX.Element => {
  const { value, nativeProps, ...restProps } = props;

  const { mainContainer, labelText } = VCSADatePickerStyles();

  return (
    <View style={mainContainer}>
      <Text variant="labelLarge" style={labelText}>
        Date of birth:-{' '}
      </Text>
      <RNDateTimePicker
        value={value}
        {...nativeProps}
        {...restProps}
        // style={dateOfBirthField}
      />
    </View>
  );
};

export default VCSADatePicker;
