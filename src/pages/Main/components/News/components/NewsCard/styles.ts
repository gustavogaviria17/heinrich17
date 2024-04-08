import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getColor } from '@shared/helpers';
import { Button, Card, Image } from 'antd';
import { styled } from 'styled-components';

export const EyeIcon = styled(RemoveRedEyeIcon)<any>`
  color: gray;
`;

export const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 1px 2px 3px 0px #c3c3c3;
  margin-bottom: 24px;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const HeaderLeft = styled.div`
  align-items: center;
  display: flex;
`;

export const StyledImage = styled(Image)`
  border-radius: 6px;
  margin-right: 10px;
`;

export const HeaderMeta = styled.div`
  margin-left: 12px;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const LikeCounter = styled.div`
  margin-left: 6px;
`;

export const StyledButton = styled(Button)<any>`
  align-items: center;
  border: none;
  border-radius: 12px;
  box-shadow: none;
  display: flex;
  margin-right: 18px !important;
  padding: 0;
  transition: none;

  svg {
    color: gray;
    width: 18px;
    height: 18px;
  }

  &:hover svg {
    color: ${getColor('accentHover')};
  }
`;

export const ViewsContainer = styled.div`
  display: flex;
`;

export const ViewsText = styled.div`
  margin-left: 4px;
`;
