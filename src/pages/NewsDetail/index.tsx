import { ReactElement, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Button, Card, Divider, Form, Input, Space, Typography } from 'antd';
import { generateRandomHex } from '@shared/helpers/generateRandomHex';
import { mockDetailsData } from './mocks';
import { CommentInputSection, CommentsSection, ImageContainer, NewsImage, NewsPageContainer, SendButtonWrapper, StyledButton, StyledCard } from './styles';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const NewsDetail = (): ReactElement => {
  const { title, date, imageUrl, content } = mockDetailsData;
  const [comments, setComments] = useState<string[]>(['Круто', 'Потерял 100$ на этой новости', 'Они совсем охренели!']);

  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

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
        {content.split('\n').map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Space>
      <CommentsSection>
        <Title level={4}>Комментарии</Title>
        {comments.map((comment, index) => (
          <StyledCard key={index}>
            <Card.Meta
              avatar={<Avatar style={{ backgroundColor: generateRandomHex() }}>П</Avatar>}
              description={comment}
              title={`Пользователь ${index + 1}`}
            />
          </StyledCard>
        ))}
      </CommentsSection>
      <CommentInputSection>
        <Form.Item>
          <TextArea onChange={(e) => setComment(e.target.value)} rows={4} value={comment} placeholder="Оставьте свой комментарий..." />
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
