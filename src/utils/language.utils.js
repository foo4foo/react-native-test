import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

// Import all locales
import en from '../i18n/language/en.json';
import sr from '../i18n/language/sr.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

I18n.translations = {
  sr,
  en
};

I18n.locale = 'sr';
const currentLocale = I18n.currentLocale();

// Is it a RTL language?
export const isRTL = currentLocale.indexOf('sr') === 0 || currentLocale.indexOf('ar') === 0;

// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string
export function translate(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;
