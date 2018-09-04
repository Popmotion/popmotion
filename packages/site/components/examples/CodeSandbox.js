import React from 'react';
import { MajorCentered } from '~/templates/global/grid';
import { cols, LIGHT_GREY } from '~/styles/vars';
import { IntersectionElement } from 'react-intersection';

const FrameContainer = MajorCentered.withComponent('div').extend`
  margin-top: ${cols(2)};
  margin-bottom: ${cols(2)};
`;

export default class CodeSandbox extends React.Component {
  state = { isVisible: false };

  setVisibility = ({ isIntersecting }) => {
    console.log(isIntersecting && !this.state.isVisible);
    isIntersecting &&
      !this.state.isVisible &&
      this.setState({ isVisible: true });
  };

  render() {
    const { id, height = 500, vue = false, ...props } = this.props;
    const suffix = vue ? '?module=%2Fsrc%2FApp.vue' : '';

    return (
      <IntersectionElement onChange={this.setVisibility}>
        <FrameContainer style={{ height: height + 'px' }}>
          {this.state.isVisible && (
            <iframe
              height={height}
              scrolling="no"
              title=""
              src={`https://codesandbox.io/embed/${id}${suffix}`}
              frameBorder="no"
              allowtransparency="true"
              allowfullScreen="true"
              style={{ width: '100%' }}
              {...props}
            />
          )}
        </FrameContainer>
      </IntersectionElement>
    );
  }
}
