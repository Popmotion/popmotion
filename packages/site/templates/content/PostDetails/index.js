import styled from 'styled-components';
import { color, media } from '~/styles/vars';
import { Centered } from '~/templates/global/grid';

const Container = styled(Centered)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    color: ${color.grey};
    font-size: 14px;

    ${media.small`font-size: 12px;`};
  }

  > * {
    margin-right: 10px;
  }
`;

const avatarSize = '30px';
const Avatar = styled.div`
  width: ${avatarSize};
  height: ${avatarSize};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: ${avatarSize};
    height: ${avatarSize};
  }
`;

const Name = styled.span``;

export default ({ published, name, avatar }) => (
  <Container>
    {avatar && (
      <Avatar>
        <img src={avatar} alt={`Avatar of ${name}`} />
      </Avatar>
    )}
    {name && <span>{name}</span>}
    {name && published && <span>{`|`}</span>}
    {published && <span>{published}</span>}
  </Container>
);
