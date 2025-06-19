// utils/validation.js
import i18n from '../translation/i18n';

/**
 * Validate email format.
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Common weak password patterns
const commonWeakPatterns = [
  '123456', 'abcdef', 'qwerty', 'password', 'letmein', '12345', '111111'
];

/**
 * Check if string contains sequential characters.
 * @param {string} str
 * @returns {boolean}
 */
const hasSequential = (str) =>
  /abc|bcd|cde|def|efg|fgh|ghi|123|234|345|456|567|678|789|890|012/.test(str.toLowerCase());

/**
 * Check if string contains repeated characters (3 or more).
 * @param {string} str
 * @returns {boolean}
 */
const hasRepeated = (str) => /(.)\1{2,}/.test(str);

/**
 * Get password strength and weaknesses.
 * @param {string} password
 * @returns {{score: number, level: string, weaknesses: string[]}}
 */
export const getPasswordStrength = (password) => {
  const weaknesses = [];

  const hasMinLength = password.length >= 8;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasMinLength) weaknesses.push(i18n.t('passwordWeak.tooShort'));
  if (!hasLower) weaknesses.push(i18n.t('passwordWeak.missingLower'));
  if (!hasUpper) weaknesses.push(i18n.t('passwordWeak.missingUpper'));
  if (!hasDigit) weaknesses.push(i18n.t('passwordWeak.missingNumber'));
  if (!hasSpecial) weaknesses.push(i18n.t('passwordWeak.missingSpecial'));

  const isWeakPattern =
    commonWeakPatterns.some((pattern) => password.toLowerCase().includes(pattern)) ||
    hasSequential(password) ||
    hasRepeated(password);

  if (isWeakPattern) weaknesses.push(i18n.t('passwordWeak.weakPattern'));

  // Count how many criteria are passed
  const criteriaPassed = [
    hasMinLength,
    hasLower,
    hasUpper,
    hasDigit,
    hasSpecial,
  ].filter(Boolean).length;

  // Penalize score if weak patterns found
  const adjustedScore = isWeakPattern ? Math.min(criteriaPassed, 2) : criteriaPassed;

  // Password strength levels
  const levels = [
    i18n.t('passwordStrength.level1'),
    i18n.t('passwordStrength.level2'),
    i18n.t('passwordStrength.level3'),
    i18n.t('passwordStrength.level4'),
    i18n.t('passwordStrength.level5'),
  ];

  return {
    score: adjustedScore,
    level: levels[adjustedScore - 1] || i18n.t('passwordStrength.level1'),
    weaknesses,
  };
};

