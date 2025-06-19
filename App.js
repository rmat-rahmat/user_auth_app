import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen } from './screens/SignUpScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './translation/i18n'; // i18n setup
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

/**
 * MainNavigator handles navigation stack based on authentication state.
 */
export function MainNavigator() {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Show Login/SignUp if not authenticated, else show Home */}
        {!user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: t('login') }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: t('signUp') }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: t('home') }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * App root component with providers for i18n, safe area, and auth context.
 */
export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaProvider>
        <AuthProvider>
          <MainNavigator />
          <StatusBar style="auto" />
        </AuthProvider>
      </SafeAreaProvider>
    </I18nextProvider>
  );
}

