import china from '@components/LanguageSelect/flags/china.jpeg';
import germany from '@components/LanguageSelect/flags/germany.png';
import india from '@components/LanguageSelect/flags/india.jpeg';
import japan from '@components/LanguageSelect/flags/japan.png';
import russia from '@components/LanguageSelect/flags/russia.avif';
import turkey from '@components/LanguageSelect/flags/turkey.webp';
import ukraine from '@components/LanguageSelect/flags/ukraine.avif';
import usa from '@components/LanguageSelect/flags/usa.png';
import vietnam from '@components/LanguageSelect/flags/vietnam.avif';
import { DARK_THEME, LIGHT_THEME } from '@shared/palette';
import { createStore, ISetterConfig, statuses } from '@store/config';

import { ILanguage, ISharedStore } from './interfaces';

const items: ILanguage[] = [
  {
    alt: 'china-flag',
    icon: china,
    key: 'zh',
    label: '中国的',
  },
  {
    alt: 'india-flag',
    icon: india,
    key: 'hi',
    label: 'हिंदी',
  },
  {
    alt: 'germany-flag',
    icon: germany,
    key: 'de',
    label: 'Deutsch',
  },
  {
    alt: 'russia-flag',
    icon: russia,
    key: 'ru',
    label: 'Русский',
  },
  {
    alt: 'usa-flag',
    icon: usa,
    key: 'en',
    label: 'English',
  },
  {
    alt: 'japan-flag',
    icon: japan,
    key: 'ja',
    label: '日本語',
  },
  {
    alt: 'ukraine-flag',
    icon: ukraine,
    key: 'uk',
    label: 'Український',
  },
  {
    alt: 'turkey-flag',
    icon: turkey,
    key: 'tr',
    label: 'Türkçe',
  },
  {
    alt: 'vietnam-flag',
    icon: vietnam,
    key: 'vi',
    label: 'Tiếng Việt',
  },
];

const defLang = {
  alt: 'usa-flag',
  icon: usa,
  key: 'en',
  label: 'English',
};

const byID =
  (target: string) =>
  ({ key }: ILanguage): boolean =>
    key === target;

const getDefaultLanguage = (): ILanguage => {
  // eslint-disable-next-line prefer-destructuring
  const browserLang = navigator.language;

  return items.filter(byID(browserLang))[0] || defLang;
};

const toggleTheme =
  ({ get, set }: ISetterConfig<ISharedStore>, actionName: string) =>
  (): void => {
    const { theme } = get();

    const isLight = theme.name === 'light';

    set({ theme: isLight ? DARK_THEME : LIGHT_THEME }, actionName);
  };

const handleSetLanguage =
  ({ get, set }: ISetterConfig<ISharedStore>, actionName: string) =>
  (targetID: string): void => {
    const { languages } = get();

    const lang = languages.filter(byID(targetID))[0] || defLang;

    set({ language: lang }, actionName);
  };

const setDataToStore = (config: ISetterConfig<ISharedStore>): ISharedStore => ({
  language: getDefaultLanguage(),
  languages: items,
  setLanguage: handleSetLanguage(config, 'setLanguage'),
  statuses,
  theme: LIGHT_THEME,
  toggleTheme: toggleTheme(config, 'toggleTheme'),
});

const useSharedStore = createStore<ISharedStore>(setDataToStore, 'sharedStore');

export default useSharedStore;
