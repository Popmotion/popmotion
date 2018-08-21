import styled from 'styled-components';
import { cols, media, LIGHT_GREY } from '~/styles/vars';

export const Content = styled.article``;

export const Centered = styled.div`
  max-width: ${cols(42)};

  ${media.medium`
    margin-left: ${cols(1)};
    margin-right: ${cols(1)};
  `};
  ${media.small`
    margin-left: ${cols(1)};
    margin-right: ${cols(1)};
  `};
`;

export const MajorCentered = styled(Centered)`
  width: 100%;

  ${media.medium`
    margin-left: ${cols(1)};
  `};
`;

export const ArticleHeader = MajorCentered.withComponent('header').extend`
  padding-bottom: 10px;
  border-bottom: 1px solid ${LIGHT_GREY};
  margin-bottom: ${cols(2)};
`;

export const SectionContainer = styled.li``;

export const ItemContainer = Centered.withComponent('li').extend`
  border-left: 1px solid ${LIGHT_GREY};
  padding: ${cols(1)} ${cols(2)};
  margin-bottom: ${cols(1)};

  ${media.medium`
    border: 0;
    padding: 0;
    margin-bottom: ${cols(2)};
  `}
`;
