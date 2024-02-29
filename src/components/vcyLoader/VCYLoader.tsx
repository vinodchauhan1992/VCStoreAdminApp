import React from 'react';
import { View } from 'react-native';
import VCYLoaderStyles from './VCYLoaderStyles';
import { useSelector } from 'react-redux';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { UI } from '../../states';

export interface VCYLoaderProps {
  loading?: boolean;
}

const VCYLoader = ({ loading = false }: VCYLoaderProps): JSX.Element | null => {
  const isLoading = useSelector(UI.selectLoader);

  const theme = useTheme();

  const { mainBackViewStyle } = VCYLoaderStyles(theme);

  if (!isLoading && !loading) {
    return null;
  }

  return (
    <View style={mainBackViewStyle}>
      <ActivityIndicator animating size={80} />
    </View>
  );
};

export default VCYLoader;
