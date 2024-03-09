import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput, TextInputProps } from 'react-native-paper';
import VCSATextFieldStyles from './VCSATextFieldStyles';

export interface VCSATextFieldProps extends TextInputProps {
  helperTextType?: 'error' | 'info';
  helperTextChildren?: React.ReactNode;
  helperTextVisible?: boolean;
}

const VCSATextField = (props: VCSATextFieldProps): JSX.Element => {
  const {
    helperTextType,
    helperTextChildren,
    helperTextVisible,
    label,
    value,
    onChangeText,
    ...restProps
  } = props;

  const { mainContainer } = VCSATextFieldStyles();

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
        <HelperText type={helperTextType ? helperTextType : 'error'} visible={helperTextVisible}>
          {helperTextChildren}
        </HelperText>
      ) : null}
    </View>
  );
};

export default VCSATextField;
