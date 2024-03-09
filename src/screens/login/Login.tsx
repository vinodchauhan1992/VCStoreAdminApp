import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import LoginStyles from './LoginStyles';
import { Button, Surface, Text } from 'react-native-paper';
import { useAppDispatch } from '../../states';
import { VCSATextField } from '../../components';

const Login = ({ navigation }: any): JSX.Element => {
  const {
    layout,
    surface,
    mainHeadingText,
    subHeadingText,
    textFieldWrapperStyle,
    loginButtonStyle,
  } = LoginStyles();

  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = async () => {
    if (!username || username === '') {
      Alert.alert('Error!', 'Username is required.', [{ text: 'Ok' }]);
      return;
    }
    if (!password || password === '') {
      Alert.alert('Error!', 'Password is required.', [{ text: 'Ok' }]);
      return;
    }
    dispatch({ type: 'LOGIN_USER', payload: { username: username, password: password } });
  };

  return (
    <SafeAreaView style={layout}>
      <Surface style={surface} elevation={2}>
        <Text variant="displaySmall" style={mainHeadingText}>
          Welcome!
        </Text>
        <Text variant="titleSmall" style={subHeadingText}>
          Login to your account
        </Text>
        <View style={textFieldWrapperStyle}>
          <VCSATextField
            placeholder="Enter username"
            label="Enter username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            keyboardType="default"
          />
          <VCSATextField
            placeholder="Enter password"
            label="Enter password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <Button mode="elevated" style={loginButtonStyle} onPress={() => onLoginPress()}>
          Login
        </Button>
      </Surface>
    </SafeAreaView>
  );
};

export default Login;
