import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n with translations for all supported languages
i18n.use(initReactI18next).init({
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        login: 'Login',
        logout: 'Logout',
        changeLanguage: 'Change Language',
        signUp: 'Sign Up',
        loggedInAs: 'Logged in as {{username}}',
        notLoggedIn: 'You are not logged in',
        home: 'Home',
        username: 'Username',
        password: 'Password',
        passwordPlaceholder: 'Enter your password',
        usernamePlaceholder: 'Enter your username',
        retypePassword: 'Retype Password',
        retypePasswordPlaceholder: 'Retype your password',
        notRegistered: 'Not registered?',
        registerHere: 'Register here',
        alreadyHaveAccount: 'Already have an account?',
        loginHere: 'Login here',
        error: {
          title: "Error",
          missingFields: "All fields are required.",
          invalidEmail: "Invalid email format.",
          passwordLength: "Password must be at least 6 characters long.",
          passwordMismatch: "Passwords do not match.",
          weakPassword: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        },
        passwordWeak: {
          tooShort: "Too short (min 8 characters)",
          missingLower: "Missing lowercase letters",
          missingUpper: "Missing uppercase letters",
          missingNumber: "Missing numbers",
          missingSpecial: "Missing special characters",
          weakPattern: "Contains weak pattern (e.g., '123456', 'abcdef', repeated/sequential chars)"
        },
        passwordStrength: {
          level1: "Very Weak",
          level2: "Weak",
          level3: "Medium",
          level4: "Strong",
          level5: "Very Strong"
        },
        signUpError: {
          emailExists: "This email is already registered.",
          default: "Sign up failed. Please try again."
        },
        signUpSuccess: "Registration successful!",
        loginSuccess: "Login successful!",
        loginError: {
          noUsers: "No users found.",
          userNotFound: "User not found.",
          invalidPassword: "Invalid password.",
          default: "Login failed. Please try again."
        },
        profile: {
          name: "Name",
          email: "Email"
        }
      },
    },
    ms: {
      translation: {
        welcome: 'Selamat Datang',
        login: 'Log Masuk',
        logout: 'Log Keluar',
        changeLanguage: 'Tukar Bahasa',
        signUp: 'Daftar',
        loggedInAs: 'Log masuk sebagai {{username}}',
        notLoggedIn: 'Anda tidak log masuk',
        home: 'Laman Utama',
        username: 'Nama Pengguna',
        password: 'Kata Laluan',
        passwordPlaceholder: 'Masukkan kata laluan anda',
        usernamePlaceholder: 'Masukkan nama pengguna anda',
        retypePassword: 'Taip Semula Kata Laluan',
        retypePasswordPlaceholder: 'Taip semula kata laluan anda',
        notRegistered: 'Belum mendaftar?',
        registerHere: 'Daftar di sini',
        alreadyHaveAccount: 'Sudah mempunyai akaun?',
        loginHere: 'Log masuk di sini',
        error: {
          title: "Ralat",
          missingFields: "Semua bidang diperlukan.",
          invalidEmail: "Format emel tidak sah.",
          passwordLength: "Kata laluan mesti mempunyai sekurang-kurangnya 6 aksara.",
          passwordMismatch: "Kata laluan tidak sepadan.",
          weakPassword: "Kata laluan mesti mengandungi sekurang-kurangnya satu huruf besar, satu huruf kecil, satu nombor, dan satu aksara khas."
        },
        passwordWeak: {
          tooShort: "Terlalu pendek (min 8 aksara)",
          missingLower: "Tiada huruf kecil",
          missingUpper: "Tiada huruf besar",
          missingNumber: "Tiada nombor",
          missingSpecial: "Tiada aksara khas",
          weakPattern: "Mengandungi corak lemah (contoh: '123456', 'abcdef', aksara berulang/berurutan)"
        },
        passwordStrength: {
          level1: "Sangat Lemah",
          level2: "Lemah",
          level3: "Sederhana",
          level4: "Kuat",
          level5: "Sangat Kuat"
        },
        signUpError: {
          emailExists: "Emel ini telah didaftarkan.",
          default: "Pendaftaran gagal. Sila cuba lagi."
        },
        signUpSuccess: "Pendaftaran berjaya!",
        loginSuccess: "Log masuk berjaya!",
        loginError: {
          noUsers: "Tiada pengguna ditemui.",
          userNotFound: "Pengguna tidak ditemui.",
          invalidPassword: "Kata laluan tidak sah.",
          default: "Log masuk gagal. Sila cuba lagi."
        },
        profile: {
          name: "Nama",
          email: "Emel"
        }
      },
    },
    zh: {
      translation: {
        welcome: '欢迎',
        login: '登录',
        logout: '登出',
        changeLanguage: '切换语言',
        signUp: '注册',
        loggedInAs: '已登录为 {{username}}',
        notLoggedIn: '您尚未登录',
        home: '主页',
        username: '用户名',
        password: '密码',
        passwordPlaceholder: '请输入您的密码',
        usernamePlaceholder: '请输入您的用户名',
        retypePassword: '重新输入密码',
        retypePasswordPlaceholder: '请再次输入您的密码',
        notRegistered: '还没有注册？',
        registerHere: '在这里注册',
        alreadyHaveAccount: '已经有账号？',
        loginHere: '在这里登录',
        error: {
          title: "错误",
          missingFields: "所有字段都是必填项。",
          invalidEmail: "无效的电子邮件格式。",
          passwordLength: "密码至少需要6个字符。",
          passwordMismatch: "两次输入的密码不一致。",
          weakPassword: "密码必须包含大写字母、小写字母、数字和特殊字符。"
        },
        passwordWeak: {
          tooShort: "太短（至少8个字符）",
          missingLower: "缺少小写字母",
          missingUpper: "缺少大写字母",
          missingNumber: "缺少数字",
          missingSpecial: "缺少特殊字符",
          weakPattern: "包含弱密码模式（如 '123456'、'abcdef'、重复/连续字符）"
        },
        passwordStrength: {
          level1: "非常弱",
          level2: "弱",
          level3: "中等",
          level4: "强",
          level5: "非常强"
        },
        signUpError: {
          emailExists: "该邮箱已被注册。",
          default: "注册失败，请重试。"
        },
        signUpSuccess: "注册成功！",
        loginSuccess: "登录成功！",
        loginError: {
          noUsers: "未找到用户。",
          userNotFound: "未找到该用户。",
          invalidPassword: "密码错误。",
          default: "登录失败，请重试。"
        },
        profile: {
          name: "姓名",
          email: "电子邮件"
        }
      },
    },
    ta: {
      translation: {
        welcome: 'வரவேற்கிறோம்',
        login: 'உள்நுழை',
        logout: 'வெளியேறு',
        changeLanguage: 'மொழியை மாற்று',
        signUp: 'பதிவு செய்',
        loggedInAs: '{{username}} என உள்நுழைந்துள்ளீர்கள்',
        notLoggedIn: 'நீங்கள் உள்நுழையவில்லை',
        home: 'முகப்பு',
        username: 'பயனர் பெயர்',
        password: 'கடவுச்சொல்',
        passwordPlaceholder: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
        usernamePlaceholder: 'உங்கள் பயனர் பெயரை உள்ளிடவும்',
        retypePassword: 'கடவுச்சொல்லை மீண்டும் உள்ளிடவும்',
        retypePasswordPlaceholder: 'உங்கள் கடவுச்சொல்லை மீண்டும் உள்ளிடவும்',
        notRegistered: 'பதிவு செய்யவில்லை?',
        registerHere: 'இங்கே பதிவு செய்யவும்',
        alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
        loginHere: 'இங்கே உள்நுழையவும்',
        error: {
          title: "பிழை",
          missingFields: "அனைத்து புலங்களும் தேவை.",
          invalidEmail: "தவறான மின்னஞ்சல் வடிவம்.",
          passwordLength: "கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்.",
          passwordMismatch: "கடவுச்சொற்கள் பொருந்தவில்லை.",
          weakPassword: "கடவுச்சொல்லில் குறைந்தது ஒரு பெரிய எழுத்து, ஒரு சிறிய எழுத்து, ஒரு எண் மற்றும் ஒரு சிறப்பு எழுத்து இருக்க வேண்டும்."
        },
        passwordWeak: {
          tooShort: "மிக குறுகியது (குறைந்தது 8 எழுத்துகள்)",
          missingLower: "சிறிய எழுத்துகள் இல்லை",
          missingUpper: "பெரிய எழுத்துகள் இல்லை",
          missingNumber: "எண்கள் இல்லை",
          missingSpecial: "சிறப்பு எழுத்துகள் இல்லை",
          weakPattern: "பலவீனமான வடிவம் உள்ளது (எ.கா., '123456', 'abcdef', மீண்டும்/தொடர்ச்சியான எழுத்துகள்)"
        },
        passwordStrength: {
          level1: "மிகவும் பலவீனமானது",
          level2: "பலவீனமானது",
          level3: "நடுத்தரமானது",
          level4: "வலுவானது",
          level5: "மிகவும் வலுவானது"
        },
        signUpError: {
          emailExists: "இந்த மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது.",
          default: "பதிவு செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்."
        },
        signUpSuccess: "பதிவு வெற்றிகரமாக முடிந்தது!",
        loginSuccess: "உள்நுழைவு வெற்றிகரமாக முடிந்தது!",
        loginError: {
          noUsers: "பயனர்கள் எதுவும் இல்லை.",
          userNotFound: "பயனர் கிடைக்கவில்லை.",
          invalidPassword: "தவறான கடவுச்சொல்.",
          default: "உள்நுழைவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்."
        },
        profile: {
          name: "பெயர்",
          email: "மின்னஞ்சல்"
        }
      },
    },
    kelantan: {
      translation: {
        welcome: 'Selamo Dato',
        login: 'Masuk',
        logout: 'Keluar',
        changeLanguage: 'Tuko Boso',
        signUp: 'Daftar',
        loggedInAs: 'Masuk sebagai {{username}}',
        notLoggedIn: 'Demo dok masuk lagi',
        home: 'Rumoh',
        username: 'Nama Pengguna',
        password: 'Kato Laluan',
        passwordPlaceholder: 'Masuk kato laluan demo',
        usernamePlaceholder: 'Masuk nama pengguna demo',
        retypePassword: 'Masuk Balik Kato Laluan',
        retypePasswordPlaceholder: 'Masuk balek kato laluan demo',
        notRegistered: 'Dok daftar lagi?',
        registerHere: 'Daftar sini',
        alreadyHaveAccount: 'Doh ado akaun?',
        loginHere: 'Masuk sini',
        error: {
          title: "Salah",
          missingFields: "Semua rupe keno isi.",
          invalidEmail: "Email tak betul.",
          passwordLength: "Kato laluan keno 6 aksara sekurang-kurangnyo.",
          passwordMismatch: "Kato laluan tak serupo.",
          weakPassword: "Kato laluan keno ado huruf besar, kecik, nombor, dan aksara pelik."
        },
        passwordWeak: {
          tooShort: "Pendek sangat (min 8 aksara)",
          missingLower: "Takdok huruf kecik",
          missingUpper: "Takdok huruf besar",
          missingNumber: "Takdok nombor",
          missingSpecial: "Takdok aksara pelik",
          weakPattern: "Ado corak lemah (contoh: '123456', 'abcdef', berulang/berurutan)"
        },
        passwordStrength: {
          level1: "Lemah Sangat",
          level2: "Lemah",
          level3: "Buleh La",
          level4: "Kuat",
          level5: "Kuat Sangat"
        },
        signUpError: {
          emailExists: "Email ni doh daftar doh.",
          default: "Takleh daftar. Cuba lagi."
        },
        signUpSuccess: "Daftar berjayo!",
        loginSuccess: "Masuk berjayo!",
        loginError: {
          noUsers: "Takdok pengguna.",
          userNotFound: "Pengguna takdok.",
          invalidPassword: "Kato laluan salah.",
          default: "Takleh masuk. Cuba lagi."
        },
        profile: {
          name: "Nama",
          email: "Email"
        }
      }
    },
    perak: {
      translation: {
        welcome: 'Selamat Datang Yop',
        login: 'Masok',
        logout: 'Keluo',
        changeLanguage: 'Tuka Bahasa',
        signUp: 'Daftar',
        loggedInAs: 'Masok sebagai {{username}}',
        notLoggedIn: 'Hang belum masok lagi',
        home: 'Rumah',
        username: 'Nama Pengguna',
        password: 'Kata Laluan',
        passwordPlaceholder: 'Masukkan kata laluan hang',
        usernamePlaceholder: 'Masukkan nama pengguna hang',
        retypePassword: 'Taip Balik Kata Laluan',
        retypePasswordPlaceholder: 'Taip balik kata laluan hang',
        notRegistered: 'Belum daftar lagi?',
        registerHere: 'Daftar sini',
        alreadyHaveAccount: 'Dah ada akaun?',
        loginHere: 'Masok sini',
        error: {
          title: "Salah",
          missingFields: "Semua ruangan kena isi.",
          invalidEmail: "Email tak betui.",
          passwordLength: "Kata laluan kena ada 6 aksara sekurang-kurangnya.",
          passwordMismatch: "Kata laluan tak sama.",
          weakPassword: "Kata laluan kena ada huruf besar, kecik, nombor, dan aksara pelik."
        },
        passwordWeak: {
          tooShort: "Pendek sangat (min 8 aksara)",
          missingLower: "Takdak huruf kecik",
          missingUpper: "Takdak huruf besar",
          missingNumber: "Takdak nombor",
          missingSpecial: "Takdak aksரா pelik",
          weakPattern: "Ada corak lemah (contoh: '123456', 'abcdef', berulang/berurutan)"
        },
        passwordStrength: {
          level1: "Lemah Sangat",
          level2: "Lemah",
          level3: "Bolehlah",
          level4: "Kuat",
          level5: "Kuat Sangat"
        },
        signUpError: {
          emailExists: "Email ni dah daftar dah.",
          default: "Tak boleh daftar. Cuba lagi."
        },
        signUpSuccess: "Daftar berjaya!",
        loginSuccess: "Masok berjaya!",
        loginError: {
          noUsers: "Takdak pengguna.",
          userNotFound: "Pengguna takdak.",
          invalidPassword: "Kata laluan salah.",
          default: "Takleh masok. Cuba lagi."
        },
        profile: {
          name: "Nama",
          email: "Email"
        }
      }
    }
  }
});

export default i18n;
