import styled from 'styled-components';
import ZeroConfigExample from './ZeroConfigExample';
import DeclarativeExample from './DeclarativeExample';
import DraggableExample from './DraggableExample';
import PassiveExample from './PassiveExample';
import ReactExample from './ReactExample';
import { Strong } from '~/templates/global/styled';
import CustomExample from './CustomExample';
import ChildrenExample from './ChildrenExample';
import FlipExample from './FlipExample';
import PluginsExample from './PluginsExample';
import Link from 'next/link';
import { CTA } from '~/templates/Popmotion/Masthead/styled';
import AnimateAnythingExample from './AnimateAnything';
import { ActionLink } from '~/templates/global-new/styled';

const MoreExamples = styled.div`
  margin: 20px auto 50px;
`;

export default class Examples extends React.Component {
  state = { framework: 'react' };

  setFramework = (framework) => () => this.setState({ framework });

  setFrameworkTo = {
    vue: this.setFramework('vue'),
    react: this.setFramework('react'),
  };

  render() {
    return (
      <Container>
        <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
          These are legacy docs for Pose. Please upgrade to{' '}
          <a href="https://framer.com/motion">Framer Motion</a>.
        </BlurbText>
        <ActionLink cta href="/pose/learn/get-started" prefetch>
          Get started
        </ActionLink>

        <MoreExamples>
          <Link href="/pose/examples">
            <a>See all examples</a>
          </Link>
        </MoreExamples>
      </Container>
    );
  }
}
