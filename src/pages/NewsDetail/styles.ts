import { BREAKPOINTS } from '@shared/palette';
import { Button, Card } from 'antd';
import { styled } from 'styled-components';

export const NewsPageContainer = styled.div`
  height: calc(100% - 165px);
  position: relative;
  width: 100%;

  @media ${BREAKPOINTS.fromTablet} {
    height: 100%;
    padding: 20px;
    margin-left: 320px;
    width: calc(100% - 320px);
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const NewsImage = styled.img`
  height: auto;
  max-width: 100%;
`;

export const CommentsSection = styled.section`
  margin-top: 20px;
`;

export const CommentInputSection = styled.section`
  margin-top: 20px;
`;

export const StyledCard = styled(Card)`
  border-radius: 8px;
  margin-top: 12px;
`;

export const SendButtonWrapper = styled.div`
  padding-bottom: 48px;
`;

export const StyledButton = styled(Button)`
  align-items: center;
  display: flex;
`;
