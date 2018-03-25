import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';
import posed from 'react-pose';
import styled from 'styled-components';
import pose from 'popmotion-pose';
import { color } from '~/styles/vars';

const props = {
  left: { height: '50px', left: '-50px' },
  right: { height: '100px', left: '50px' }
};

const code = `await poser.set('childOut')
await poser.flip(() => {
  poser.clearChildren()
  parentElement.removeChild(parent.firstChild)
  parentElement.appendChild(newChild)
  poser.addChild(newChild, childProps)
})
poser.set('childIn')`;

const Modal = styled.div`
  background: ${color.green};
  width: 300px;
  padding: 20px;
  overflow: hidden;

  > div {
    background: white;
    height: 40px;
    margin-bottom: 10px;
    opacity: 0;
    border-radius: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const modalProps = {
  itemsOut: {
    staggerChildren: 50
  }
};
const modalItemProps = {
  initialPose: 'itemsOut',
  itemsOut: {
    x: -50,
    opacity: 0
  },
  itemsIn: {
    x: 0,
    opacity: 1
  }
};

class Example extends React.Component {
  a = [0, 1, 2, 3];
  b = [4, 5, 6];

  state = {
    list: this.a
  };

  listRefs = new Set();

  setContainerRef = ref => {
    if (ref) {
      this.ref = ref;
    } else if (this.modalPoser) {
      this.modalPoser.destroy();
    }
  };

  setItemRef = ref => {
    if (ref) {
      this.listRefs.add(ref);
    } else if (this.modalPoser) {
      // remove
    }
  };

  componentDidMount() {
    this.modalPoser = pose(this.ref, modalProps);
    this.listRefs.forEach(el => this.modalPoser.addChild(el, modalItemProps));
    this.listRefs.clear();

    this.modalPoser.set('itemsIn');

    this.interval = setInterval(() => {
      this.modalPoser.set('itemsOut').then(() => {
        this.modalPoser.clearChildren();
        this.modalPoser.measure();
        this.setState({
          list: this.state.list === this.a ? this.b : this.a
        });
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.listRefs.forEach(el => this.modalPoser.addChild(el, modalItemProps));
    this.listRefs.clear();
    this.modalPoser.flip().then(() => this.modalPoser.set('itemsIn'));
  }

  render() {
    return (
      <Modal innerRef={this.setContainerRef}>
        {this.state.list.map(i => <div key={i} ref={this.setItemRef} />)}
      </Modal>
    );
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
