import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { getFields } from '@store/config';
import useSharedStore from '@store/shared';
import { ILanguage } from '@store/shared/interfaces';
import { Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

import Icon from './components/Icon';
import { Container } from './styles';

const LanguageSelect = (): ReactElement => {
  const { i18n } = useTranslation();
  const { setLanguage, language, languages } = useSharedStore(
    getFields(['setLanguage', 'language', 'languages']),
  );

  const handleCLick = ({ key }: any): void => {
    setLanguage(key);
    i18n.changeLanguage(key);
  };

  const toDropdownOptions = ({ label, key, alt, icon }: ILanguage): ItemType => ({
    icon: <Icon alt={alt} img={icon} />,
    key,
    label,
    onClick: handleCLick,
  });

  const items = languages.map(toDropdownOptions);
  const { alt, label, icon } = language;

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Container>
        <img alt={alt} src={icon} />
        {label}
      </Container>
    </Dropdown>
  );
};

export default LanguageSelect;
