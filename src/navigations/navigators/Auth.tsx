import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../../config';
import { Login, ForgotPassword } from '../../screens';

const Stack = createStackNavigator();

const Auth = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen name={config.routes.LOGIN} component={Login} options={{ headerShown: false }} />
    <Stack.Screen
      name={config.routes.FORGOT_PASSWORD}
      component={ForgotPassword}
      options={{ title: config.strings.FORGOTTEN_PASSWORD }}
    />
  </Stack.Navigator>
);

export default Auth;
