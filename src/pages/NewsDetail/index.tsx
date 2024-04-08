import { ChangeEvent, ReactElement, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { generateRandomHex } from '@shared/helpers/generateRandomHex';
import { Avatar, Card, Divider, Form, Input, Space, Typography } from 'antd';

import { mockDetailsData } from './mocks';
import { CommentInputSection, CommentsSection, ImageContainer, NewsImage, NewsPageContainer, SendButtonWrapper, StyledButton, StyledCard } from './styles';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const NewsDetail = (): ReactElement => {
  const [comments, setComments] = useState<string[]>(['Круто', 'Потерял 100$ на этой новости', 'Они совсем охренели!']);
  const [comment, setComment] = useState<string>('');

  const { title, date, imageUrl, content } = mockDetailsData;

  const handleAddComment = (): void => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  const mapParagraph = (paragraph: string): ReactElement => (
    <Paragraph key={paragraph}>{paragraph}</Paragraph>
  );

  const mapComments = (comment: string, index: number): ReactElement => (
    <StyledCard key={comment}>
      <Card.Meta
        avatar={<Avatar style={{ backgroundColor: generateRandomHex() }}>П</Avatar>}
        description={comment}
        title={`Пользователь ${index + 1}`}
      />
    </StyledCard>
  );

  const handleSetComment = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>): void => setComment(value);

  return (
    <NewsPageContainer>
      <Title>{title}</Title>
      <Divider />
      <Paragraph type="secondary">{date}</Paragraph>
      <ImageContainer>
        <NewsImage alt={title} src={imageUrl} />
      </ImageContainer>
      <Divider />
      <Space direction="vertical">
        {content.split('\n').map(mapParagraph)}
      </Space>
      <CommentsSection>
        <Title level={4}>Комментарии</Title>
        {comments.map(mapComments)}
      </CommentsSection>
      <CommentInputSection>
        <Form.Item>
          <TextArea onChange={handleSetComment} placeholder="Оставьте свой комментарий..." rows={4} value={comment} />
        </Form.Item>
        <Form.Item>
          <SendButtonWrapper>
            <StyledButton icon={<SendIcon />} onClick={handleAddComment} type="primary">
              Отправить
            </StyledButton>
          </SendButtonWrapper>
        </Form.Item>
      </CommentInputSection>
    </NewsPageContainer>
  );
};

export default NewsDetail;
