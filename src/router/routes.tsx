import React, { lazy } from 'react';

import { IRoute } from './interfaces';

export const ROUTES: IRoute[] = [
  {
    component: lazy(() => import('@pages/Main')),
    fallback: <div />,
    isPrivate: false,
    isWithPrefix: false,
    path: ['/faq', '/about'],
  },
  {
    component: lazy(() => import('@pages/Main/components/News')),
    fallback: <div />,
    isPrivate: false,
    isWithPrefix: false,
    path: ['/news'],
  },
  {
    component: lazy(() => import('@pages/Main')),
    fallback: <div />,
    isWithPrefix: false,
    path: ['/subscribes', '/signals', '/favorite'],
  },
  {
    component: lazy(() => import('@pages/NewsDetail')),
    fallback: <div />,
    isWithPrefix: false,
    path: ['/news/*'],
  },
  {
    component: lazy(() => import('@pages/Auth')),
    fallback: <div />,
    isPrivate: false,
    isWithBasicLayout: false,
    isWithPrefix: false,
    path: ['/login', '/signup'],
  },
  {
    component: lazy(() => import('@pages/NotFound')),
    isPrivate: false,
    isWithBasicLayout: false,
    isWithPrefix: false,
    path: '/404',
  },
];
