import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigations';
import { VCSALoader } from './components';
import { themeConfig } from './themes';
import { ThemeState, useAppDispatch, useAppSelector } from './states';
import { PaperProvider } from 'react-native-paper';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const colorScheme = useColorScheme();

  const isDarkTheme = true;
  // useAppSelector(ThemeState.selectSettingsTheme);

  React.useEffect(() => {
    if (colorScheme === 'dark') {
      dispatch(ThemeState.saveSettingsThemeSchemeData(true));
    }
  }, []);

  return (
    <PaperProvider theme={themeConfig.getAppTheme(isDarkTheme ? 'dark' : 'light')}>
      <NavigationContainer
        theme={themeConfig.getNavigationAdaptiveTheme(isDarkTheme ? 'dark' : 'light')}>
        <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
        <RootNavigation />
        <VCSALoader />
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  layout: { flex: 1 },
});

export default App;
