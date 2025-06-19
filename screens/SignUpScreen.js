import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { LanguageChangeWrapper } from '../components/LanguageChangeWrapper';
import { validateEmail, getPasswordStrength } from '../utils/validation';

export const SignUpScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { signUp } = useAuth();

  // Refs for input focus management
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const retypePasswordInputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, level: '', weaknesses: [] });
  const [retypePassword, setRetypePassword] = useState('');
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [retypeError, setRetypeError] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(text.length > 0 && !validateEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordStrength(getPasswordStrength(text));
    // Also check retype password if already typed
    if (retypePassword.length > 0) {
      setRetypeError(text !== retypePassword);
    }
  };

  const handleRetypePasswordChange = (text) => {
    setRetypePassword(text);
    setRetypeError(password !== text && text.length > 0);
  };

  const handleSignUp = () => {
    setError('');
    signUp(name, email, password);
    navigation.navigate('Login');
  };

  // Color for strength bar
  const getStrengthColor = (score) => {
    if (score === 5) return 'green';
    if (score >= 3) return 'orange';
    return 'red';
  };

  // Add this derived variable before return
  const isRegisterDisabled =
    !name ||
    emailError ||
    !validateEmail(email) ||
    retypeError ||
    passwordStrength.score < 3;

  return (
    <LanguageChangeWrapper>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Text style={styles.title}>{t('welcome')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('name')}
              value={name}
              onChangeText={setName}
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current && emailInputRef.current.focus()}
              blurOnSubmit={false}
            />
            <TextInput
              ref={emailInputRef}
              style={[
                styles.input,
                emailError && styles.inputError
              ]}
              placeholder={t('email')}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current && passwordInputRef.current.focus()}
              blurOnSubmit={false}
            />
            {emailError && (
              <Text style={styles.error}>{t('error.invalidEmail')}</Text>
            )}
            {/* Password Field with Icon inside TextInput */}
            <View style={styles.inputIconWrapper}>
              <TextInput
                ref={passwordInputRef}
                style={[
                  styles.input,
                  styles.inputWithIcon,
                  { marginBottom: 0 }
                ]}
                placeholder={t('password')}
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={!showPassword}
                returnKeyType="next"
                onSubmitEditing={() => retypePasswordInputRef.current && retypePasswordInputRef.current.focus()}
                blurOnSubmit={false}
              />
              <TouchableOpacity
                style={styles.iconTouchable}
                onPress={() => setShowPassword((prev) => !prev)}
                activeOpacity={0.7}
              >
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="gray" />
              </TouchableOpacity>
            </View>
            <View style={styles.strengthBarContainer}>
              <View
                style={[
                  styles.strengthBar,
                  {
                    width: `${(passwordStrength.score / 5) * 100}%`,
                    backgroundColor: getStrengthColor(passwordStrength.score),
                  },
                ]}
              />
            </View>
            {password.length > 0 && (
              <>
                <Text style={{ color: getStrengthColor(passwordStrength.score), marginBottom: 5 }}>
                  {t(`passwordStrength.level${passwordStrength.score}`, passwordStrength.level) || passwordStrength.level}
                </Text>
                {passwordStrength.weaknesses && passwordStrength.weaknesses.length > 0 && (
                  <View style={styles.weaknessList}>
                    {passwordStrength.weaknesses.map((w, idx) => (
                      <Text key={idx} style={styles.weaknessText}>• {w}</Text>
                    ))}
                  </View>
                )}
              </>
            )}
            {/* Retype Password Field with Icon inside TextInput */}
            <View style={styles.inputIconWrapper}>
              <TextInput
                ref={retypePasswordInputRef}
                style={[
                  styles.input,
                  styles.inputWithIcon,
                  { marginBottom: 0 },
                  retypeError && styles.inputError
                ]}
                placeholder={t('retypePassword')}
                value={retypePassword}
                onChangeText={handleRetypePasswordChange}
                secureTextEntry={!showRetypePassword}
                returnKeyType="done"
                onSubmitEditing={() => {
                  if (!isRegisterDisabled) handleSignUp();
                }}
              />
              <TouchableOpacity
                style={styles.iconTouchable}
                onPress={() => setShowRetypePassword((prev) => !prev)}
                activeOpacity={0.7}
              >
                <Ionicons name={showRetypePassword ? 'eye-off' : 'eye'} size={22} color="gray" />
              </TouchableOpacity>
            </View>
            {retypeError && (
              <Text style={styles.error}>{t('error.passwordMismatch')}</Text>
            )}
            <View style={styles.buttonContainer}>
              <Button
                title={t('signUp')}
                onPress={handleSignUp}
                disabled={isRegisterDisabled}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Text style={styles.centerText}>{t('alreadyHaveAccount')}</Text>
              <Button title={t('loginHere')} onPress={() => navigation.replace('Login')} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LanguageChangeWrapper>
  );
};

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
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  inputWithIcon: {
    paddingRight: 40, // space for icon
  },
  inputError: {
    borderColor: 'red',
  },
  inputIconWrapper: {
    width: '100%',
    position: 'relative',
    marginBottom: 10,
  },
  iconTouchable: {
    position: 'absolute',
    right: 10,
    top: 8,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  centerText: {
    textAlign: 'center',
  },
  strengthBarContainer: {
    height: 6,
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: 3,
    marginBottom: 5,
    overflow: 'hidden',
  },
  strengthBar: {
    height: '100%',
    borderRadius: 3,
  },
  weaknessList: {
    marginBottom: 5,
    marginLeft: 5,
  },
  weaknessText: {
    color: 'red',
    fontSize: 12,
  },
});