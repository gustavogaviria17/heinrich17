import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BulbOutlined,
  ClockCircleOutlined,
  RocketOutlined,
  SnippetsOutlined,
  SolutionOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from '@shared/hooks';
import { BREAKPOINTS } from '@shared/palette';
import i18n from '@shared/translation';

// Предполагая, что INavItem определен в другом месте
import { INavItem } from './interfaces';

export const useNavData = (): INavItem[] => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobileS);
  const { t } = useTranslation();

  const desktopNav = [
    {
      icon: ClockCircleOutlined,
      id: 1,
      isActive: false,
      title: i18n.t('navigation.list.news'),
      url: '/news',
    },
    {
      icon: SnippetsOutlined,
      id: 2,
      isActive: false,
      title: i18n.t('navigation.list.signals'),
      url: '/signals',
    },
    {
      icon: StarOutlined,
      id: 3,
      isActive: false,
      title: i18n.t('navigation.list.favorite'),
      url: '/favorite',
    },
    {
      icon: TeamOutlined,
      id: 4,
      isActive: false,
      title: i18n.t('navigation.list.subscribes'),
      url: '/subscribes',
    },
    {
      icon: BulbOutlined,
      id: 5,
      isActive: false,
      title: i18n.t('navigation.list.faq'),
      url: '/faq',
    },
    {
      icon: RocketOutlined,
      id: 6,
      isActive: false,
      title: i18n.t('navigation.list.aboutus'),
      url: '/about',
    },
  ];
  const mobilepNav = [
    {
      icon: ClockCircleOutlined,
      id: 1,
      isActive: false,
      title: i18n.t('navigation.list.news'),
      url: '/news',
    },
    {
      icon: SnippetsOutlined,
      id: 2,
      isActive: false,
      title: i18n.t('navigation.list.signals'),
      url: '/signals',
    },
    {
      icon: StarOutlined,
      id: 3,
      isActive: false,
      title: i18n.t('navigation.list.favorite'),
      url: '/favorite',
    },
    {
      icon: SolutionOutlined,
      id: 4,
      isActive: false,
      title: i18n.t('navigation.list.profile'),
      url: '/profile',
    },
  ];

  const setNavData = (): INavItem[] => (isMobile ? mobilepNav : desktopNav);

  return useMemo(setNavData, [t, isMobile]);
};
