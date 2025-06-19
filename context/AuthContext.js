import { useContext, useCallback, useMemo, useState, useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../translation/i18n';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simple hash function for demonstration (not secure for production)
  function simpleHash(str) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash.toString();
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
  }

  // Simple salt generator
  function generateSalt(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let salt = '';
    for (let i = 0; i < length; i++) {
      salt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return salt;
  }

  // Load auth user on init
  useEffect(() => {
    const loadAuthUser = async () => {
      try {
        const userJson = await AsyncStorage.getItem('auth_user');
        if (userJson) {
          setUser(JSON.parse(userJson));
        }
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    loadAuthUser();
  }, []);

  // signUp now uses AsyncStorage and returns meaningful error/message
  const signUp = useCallback(async (name, email, password) => {
    try {
      const usersJson = await AsyncStorage.getItem('user_list');
      let users = [];
      if (usersJson) {
        users = JSON.parse(usersJson);
        if (users.find(u => u.email === email)) {
          throw {
            error: 'Email already registered',
            message: i18n.t('signUpError.emailExists')
          };
        }
      }
      const salt = generateSalt();
      const hashedPassword = simpleHash(password + salt);
      const newUser = {
        name,
        email,
        password: hashedPassword,
        salt
      };
      users.push(newUser);
      await AsyncStorage.setItem('user_list', JSON.stringify(users));
      await AsyncStorage.setItem('auth_user', JSON.stringify(newUser));
      setUser(newUser);
      return { user: newUser, message: i18n.t('signUpSuccess') };
    } catch (e) {
      throw {
        error: e.error || 'Sign up failed',
        message: e.message || i18n.t('signUpError.default')
      };
    }
  }, []);

  // login now uses AsyncStorage and returns meaningful error/message
  const login = useCallback(async (email, password) => {
    try {
      const usersJson = await AsyncStorage.getItem('user_list');
      if (!usersJson) {
        throw {
          error: 'No users found',
          message: i18n.t('loginError.noUsers')
        };
      }
      const users = JSON.parse(usersJson);
      const foundUser = users.find(u => u.email === email);
      if (!foundUser) {
        throw {
          error: 'User not found',
          message: i18n.t('loginError.userNotFound')
        };
      }
      const hashedInput = simpleHash(password + foundUser.salt);
      if (hashedInput === foundUser.password) {
        await AsyncStorage.setItem('auth_user', JSON.stringify(foundUser));
        setUser(foundUser);
        return { user: foundUser, message: i18n.t('loginSuccess') };
      }
      throw {
        error: 'Invalid password',
        message: i18n.t('loginError.invalidPassword')
      };
    } catch (e) {
      throw {
        error: e.error || 'Login failed',
        message: e.message || i18n.t('loginError.default')
      };
    }
  }, []);

  // logout now uses AsyncStorage
  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('auth_user');
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    user,
    login,
    logout,
    signUp,
    loading
  }), [user, login, logout, signUp, loading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}