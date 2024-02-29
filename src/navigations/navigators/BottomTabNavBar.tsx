import React from 'react';
import config from '../../config';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Home, Settings } from '../../screens';

const Tab = createMaterialBottomTabNavigator();

const Main = (): JSX.Element => {
  const { MarvelIcons } = config.vectorIcons;

  return (
    <Tab.Navigator initialRouteName={config.routes.HOME}>
      <Tab.Screen
        name={config.strings.HOME_TITLE}
        component={Home}
        options={{
          tabBarLabel: config.strings.HOME_TITLE,
          tabBarIcon: ({ color }) => <MarvelIcons name="home" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name={config.strings.SETTINGS_TITLE}
        component={Settings}
        options={{
          tabBarLabel: config.strings.SETTINGS_TITLE,
          tabBarIcon: ({ color }) => <MarvelIcons name="settings" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
