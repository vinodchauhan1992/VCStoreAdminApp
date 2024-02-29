import React from 'react';
import {View} from 'react-native';
import {HelperText, TextInput, TextInputProps} from 'react-native-paper';
import VCYTextFieldStyles from './VCYTextFieldStyles';

export interface VCYTextFieldProps extends TextInputProps {
  helperTextType?: 'error' | 'info';
  helperTextChildren?: React.ReactNode;
  helperTextVisible?: boolean;
}

const VCYTextField = (props: VCYTextFieldProps): JSX.Element => {
  const {
    helperTextType,
    helperTextChildren,
    helperTextVisible,
    label,
    value,
    onChangeText,
    ...restProps
  } = props;

  const {mainContainer} = VCYTextFieldStyles();

  return (
    <View style={mainContainer}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        {...restProps}
      />
      {helperTextChildren && helperTextChildren !== '' ? (
        <HelperText
          type={helperTextType ? helperTextType : 'error'}
          visible={helperTextVisible}>
          {helperTextChildren}
        </HelperText>
      ) : null}
    </View>
  );
};

export default VCYTextField;
