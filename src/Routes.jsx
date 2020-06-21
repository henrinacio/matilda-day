import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, Button } from 'react-native';
import { Center } from './Center';

const Stack = createStackNavigator();

function Login({ navigation }) {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

function Register({ navigation }) {
  return (
    <Center>
      <Text>I am a register screen</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate('Login');
          // navigation.goBack();
        }}
      />
    </Center>
  );
}

export const Routes = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerTitle: 'Sign In' }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerTitle: 'Sign Up' }}
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
