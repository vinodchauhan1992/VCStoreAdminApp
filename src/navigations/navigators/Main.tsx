import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../../config';
import { Profile } from '../../screens';
import { VCSAProfileHeaderBackground } from '../../components';
import BottomTabNavBar from './BottomTabNavBar';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

const HomeStack = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        name={config.routes.HOME}
        component={BottomTabNavBar}
        options={{
          title: config.strings.HOME_TITLE,
        }}
      />
      <Stack.Screen
        name={config.routes.SETTINGS}
        component={BottomTabNavBar}
        options={{ title: config.strings.SETTINGS_TITLE }}
      />
      <Stack.Screen
        name={config.routes.PROFILE}
        component={Profile}
        options={{
          title: config.strings.PROFILE_TITLE,
          headerBackTitleVisible: false,
          headerTintColor: theme.colors.onBackground,
          headerBackground() {
            return <VCSAProfileHeaderBackground />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
