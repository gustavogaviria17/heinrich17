import { ReactElement } from 'react';

import { Wrapper } from './styles';

interface IContentWrapperProps {
  children: ReactElement | ReactElement[];
}

const ContentWrapper = ({ children }: IContentWrapperProps): ReactElement => <Wrapper>{children}</Wrapper>;

export default ContentWrapper;
