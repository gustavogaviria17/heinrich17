import { ReactElement } from 'react';
import FiltersPanel from '@components/FiltersPanel';

import { Wrapper } from '../../styles';

import NewsCard from './components/NewsCard';
import { mockNews } from './constants';
import { NewsWrapper } from './styles';

const News = (): ReactElement => (
  <Wrapper>
    <FiltersPanel />
    <NewsWrapper>
      {mockNews.map((newsElement) => <NewsCard {...newsElement} key={newsElement.content} />)}
    </NewsWrapper>
  </Wrapper>
);

export default News;
