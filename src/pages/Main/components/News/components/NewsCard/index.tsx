import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';

import { ButtonWrapper, EyeIcon, Footer, Header, HeaderLeft, HeaderMeta, LikeCounter, StyledButton, StyledCard, StyledImage, ViewsContainer, ViewsText } from './styles';

interface INewsCardProps {
    content: string;
    dislikes: number;
    imageUrl: string;
    likes: number;
    publishDate: string;
    source: string;
    title: string;
    views: number;
}

const elipsisConfig = {
  expandable: true,
  rows: 3,
  symbol: 'Читать далее',

};

const NewsCard = ({ imageUrl, source, publishDate, views, content, title, likes, dislikes }: INewsCardProps): ReactElement => (
  <StyledCard>
    <Header>
      <HeaderLeft>
        <StyledImage alt="news" height={64} src={imageUrl} width={84} />
        <HeaderMeta>
          <div>{source}</div>
          <div>{publishDate}</div>
        </HeaderMeta>
      </HeaderLeft>
      <ViewsContainer>
        <EyeIcon />
        <ViewsText>{views}</ViewsText>
      </ViewsContainer>
    </Header>
    <StyledCard.Meta
      description={<Paragraph ellipsis={elipsisConfig}>{content}</Paragraph>}
      title={<Link to="/news/123"><Typography.Title level={4}>{title}</Typography.Title></Link>}
    />
    <Footer>
      <ButtonWrapper>
        <StyledButton style={{ marginRight: 8 }}>
          <ThumbUpIcon />
          <LikeCounter>{likes}</LikeCounter>
        </StyledButton>
        <StyledButton>
          <ThumbDownAltIcon />
          <LikeCounter>{dislikes}</LikeCounter>
        </StyledButton>
      </ButtonWrapper>
    </Footer>
  </StyledCard>
  );

export default NewsCard;
