import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import ForgotPasswordStyles from './ForgotPasswordStyles';

const Home = (): JSX.Element => {
  const {layout} = ForgotPasswordStyles();

  return (
    <SafeAreaView style={layout}>
      <Text>Forgot Password</Text>
    </SafeAreaView>
  );
};

export default Home;
