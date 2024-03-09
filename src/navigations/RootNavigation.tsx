import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth, Main } from './navigators';
import { UI, LoginState, useAppDispatch, useAppSelector } from '../states';
import { Splash } from '../screens';
import config from '../config';

const Stack = createStackNavigator();

const RootNavigation = (): any => {
  const dispatch = useAppDispatch();

  const isToShowSplashScreen = useAppSelector(UI.selectSplashVisibility);
  const isUserLoggedIn = useAppSelector(LoginState.selectIsUserLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      dispatch(UI.updateSplashVisibility(false));
    }, 2000);
  }, [isToShowSplashScreen, dispatch]);

  const navigationStack = (): any => {
    if (!isUserLoggedIn && isToShowSplashScreen) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name={config.routes.SPLASH}
            component={Splash}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      );
    }

    return isUserLoggedIn ? <Main /> : <Auth />;
  };

  return navigationStack();
};

export default RootNavigation;
