import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../../config';
import { Comments, Profile, Replies, Video, VideosList } from '../../screens';
import { VCYProfileHeaderBackground } from '../../components';
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
        name={config.routes.VIDEOS_LIST}
        component={VideosList}
        options={{
          title: config.strings.VIDEOS_LIST_TITLE,
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
            return <VCYProfileHeaderBackground />;
          },
        }}
      />
      <Stack.Screen
        name={config.routes.VIDEO}
        component={Video}
        options={{ title: config.strings.VIDEO_TITLE }}
      />
      <Stack.Screen
        name={config.routes.COMMENTS}
        component={Comments}
        options={{ title: config.strings.COMMENTS_TITLE }}
      />
      <Stack.Screen
        name={config.routes.REPLIES}
        component={Replies}
        options={{ title: config.strings.REPLIES_TITLE }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
