import React, { useEffect } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import config from '../../config';
import SplashStyles from './SplashStyles';
import { Text } from 'react-native-paper';
import { ThemeState, useAppDispatch } from '../../states';

const Splash = (): JSX.Element => {
  const { layout, loadingText } = SplashStyles();
  // const {VCMartIcons} = config.vectorIcons;

  return (
    <SafeAreaView style={layout}>
      {/* <VCMartIcons
        name={config.iconsName.SHOPPING_CART_FILLED}
        style={styles.icon}
      /> */}
      <Text style={loadingText} variant="displayMedium">
        {config.strings.LOADING}
      </Text>
    </SafeAreaView>
  );
};

export default Splash;
