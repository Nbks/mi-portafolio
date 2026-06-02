import { translations as es } from './es';
import { translations as en } from './en';
import { translations as it } from './it';

export const locales = ['es', 'en', 'it'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'es';

const translations = { es, en, it };

export function getLangFromParams(params: { lang?: string }): Locale {
  const lang = params.lang;
  if (lang && locales.includes(lang as Locale)) {
    return lang as Locale;
  }
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return translations[lang] ?? translations[defaultLocale];
}