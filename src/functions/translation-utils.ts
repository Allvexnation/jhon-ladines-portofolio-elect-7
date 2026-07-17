import translationsEn from '@/static/about_english.json';
import translationsTl from '@/static/about_tagalog.json';

export function getTranslations(lang: string) {
  return lang === 'en' ? translationsEn.en : translationsTl.tl;
}
