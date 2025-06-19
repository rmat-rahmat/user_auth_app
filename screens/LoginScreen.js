import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { LanguageChangeWrapper } from '../components/LanguageChangeWrapper';

export const LoginScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { login } = useAuth();

  // State for form fields and error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Ref for password input to focus from email input
  const passwordInputRef = useRef(null);

  // Handle login logic
  const handleLogin = async () => {
    setLoginError('');
    try {
      await login(email, password);
      // Optionally navigate or do something on success
    } catch (err) {
      setLoginError(
        err?.message
          ? err.message
          : t('loginError.default')
      );
    }
  };

  return (
    <LanguageChangeWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 40}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>{t('welcome')}</Text>
            {/* Email Input */}
            <TextInput
              placeholder={t('email')}
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
              blurOnSubmit={false}
            />
            {/* Password Input with show/hide icon */}
            <View style={styles.passwordContainer}>
              <View style={styles.passwordInputWrapper}>
                <TextInput
                  ref={passwordInputRef}
                  placeholder={t('password')}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  style={styles.passwordInput}
                  returnKeyType="done"
                  onSubmitEditing={handleLogin}
                />
                <TouchableOpacity
                  style={{ padding: 10 }}
                  onPress={() => setShowPassword((prev) => !prev)}
                >
                  <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Login error message */}
            <View style={{ width: '100%' }}>
              {loginError ? (
                <Text style={styles.loginError}>{loginError}</Text>
              ) : null}
            </View>
            {/* Login Button */}
            <View style={styles.loginButtonContainer}>
              <Button title={t('login')} onPress={handleLogin} />
            </View>
            {/* Register navigation */}
            <View style={styles.loginButtonContainer}>
              <Text style={{ textAlign: 'center' }}>{t('notRegistered')}</Text>
              <Button title={t('registerHere')} onPress={() => navigation.replace('SignUp')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LanguageChangeWrapper>
  );
};

// Styles for the login screen
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 20,
  },
  passwordInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  loginButtonContainer: {
    width: '100%',
    marginBottom: 10,
  },
  loginError: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '100%',
    textAlign: 'left',
  },
});