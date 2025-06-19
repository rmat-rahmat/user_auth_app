import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';

export const HomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  useEffect(() => {
    // Check if user is logged in, if not redirect to login
    console.log('User:', user);
  }, [user, navigation]);

  const handleLogout = () => {
    logout();
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Welcome Title */}
      <Text style={styles.title}>{t('welcome')}</Text>
      {/* User Info Card */}
      {user ? (
        <View style={styles.card}>
          <Text style={styles.label}>{t('profile.name')}:</Text>
          <Text style={styles.value}>{user.name}</Text>
          <Text style={styles.label}>{t('profile.email')}:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
      ) : (
        <Text style={styles.userInfo}>{t('notLoggedIn')}</Text>
      )}
      {/* Logout Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>{t('logout')}</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the Home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 30,
    width: 320,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    color: '#222',
    fontWeight: '500',
    marginBottom: 4,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#2e7dff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 16,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  langButton: {
    backgroundColor: '#e0e7ff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  langButtonText: {
    color: '#2e7dff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});