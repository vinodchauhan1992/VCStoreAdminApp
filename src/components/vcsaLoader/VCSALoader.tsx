import React from 'react';
import { View } from 'react-native';
import VCSALoaderStyles from './VCSALoaderStyles';
import { useSelector } from 'react-redux';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { UI } from '../../states';

export interface VCSALoaderProps {
  loading?: boolean;
}

const VCSALoader = ({ loading = false }: VCSALoaderProps): JSX.Element | null => {
  const isLoading = useSelector(UI.selectLoader);

  const theme = useTheme();

  const { mainBackViewStyle } = VCSALoaderStyles(theme);

  if (!isLoading && !loading) {
    return null;
  }

  return (
    <View style={mainBackViewStyle}>
      <ActivityIndicator animating size={80} />
    </View>
  );
};

export default VCSALoader;
