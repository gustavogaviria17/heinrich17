import { ReactElement } from 'react';

import NewsCard from './components/NewsCard';
import { mockNews } from './constants';

const News = (): ReactElement => (
  <>
    {mockNews.map((newsElement) => <NewsCard {...newsElement} key={newsElement.content} />)}
  </>
);

export default News;
