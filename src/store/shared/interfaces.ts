import { Theme } from '@shared/palette/interfaces';
import { IDefaultStore } from '@store/config';

export interface ISharedStore extends IDefaultStore {
  language: ILanguage;
  languages: ILanguage[];
  setLanguage: (key: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export interface ILanguage {
  alt: string;
  icon: string;
  key: string;
  label: string;
}
