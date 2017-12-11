import Template from './Template';
import {
  ModalShade,
  ModalContainer,
  Modal,
  ModalActions,
  ModalCancel,
  ModalOk,
  ModalHeader,
  AlignCenter
} from './styled';
import { CTA } from '../Masthead/styled';
import { styler, easing, timeline } from 'popmotion';
import { createPortal } from 'react-dom';

const code = `timeline([
  { track: 'shade', from: 0, to: 1, ease: easing.linear },
  '-100',
  {
    track: 'modal',
    duration: 500,
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ease: { y: easing.backOut, opacity: easing.linear }
  }
])`;

const tweenUp = (track, duration = 500, yFrom = 100) => ({
  track,
  duration,
  from: { y: yFrom, opacity: 0 },
  to: { y: 0, opacity: 1 },
  ease: { y: easing.backOut, opacity: easing.linear }
});

class Example extends React.Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  cancelModal = () => {
    timeline([
      {
        track: 'modal',
        duration: 200,
        from: { y: 0, opacity: 1 },
        to: { y: 100, opacity: 0 },
        ease: { y: easing.easeIn, opacity: easing.linear }
      },
      '-100',
      { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 200 }
    ]).start({
      update: this.setStylers,
      complete: this.closeModal
    });
  };

  okModal = () => {
    timeline([
      {
        track: 'modal',
        duration: 200,
        from: { y: 0, opacity: 1 },
        to: { y: -200, opacity: 0 },
        ease: { y: easing.easeOut, opacity: easing.linear }
      },
      '-100',
      { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 300 }
    ]).start({
      update: this.setStylers,
      complete: this.closeModal
    });
  };

  animateOpen = () => {
    timeline([
      { track: 'shade', from: 0, to: 1, ease: easing.linear },
      '-100',
      tweenUp('modal'),
      '-200',
      [...this.modalSections.map((s, i) => tweenUp(this.sectionLabels[i], 300, 50)), 50]
    ]).start(this.setStylers);
  };

  setPopupRef = (ref) => {
    if (!ref) return;

    const modal = document.getElementById('modal');
    this.shade = styler(document.getElementById('modal-shade'));
    this.modal = styler(modal);
    this.modalSections = Array.from(modal.children).map(styler);
    this.sectionLabels = this.modalSections.map((section, i) => 'section' + i);

    this.setStylers = (v) => {
      if (v.shade !== undefined) this.shade.set('opacity', v.shade);
      if (v.modal !== undefined) this.modal.set(v.modal);
      this.sectionLabels.forEach((label, i) => {
        if (v[label] !== undefined) this.modalSections[i].set(v[label]);
      });
    };

    this.animateOpen();
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        {isOpen && (
          createPortal(
            <div ref={this.setPopupRef}>
              <ModalShade id="modal-shade" />
              <ModalContainer>
                <Modal id="modal">
                  <ModalHeader>Pay attention!</ModalHeader>
                  <p>Just kidding, this dialog is entirely for demonstration purposes.</p>
                  <ModalActions>
                    <ModalCancel onClick={this.cancelModal}>Cancel</ModalCancel>
                    <ModalOk onClick={this.okModal}>Ok</ModalOk>
                  </ModalActions>
                </Modal>
              </ModalContainer>
            </div>,
            document.body
          )
        )}
        <CTA>
          <button onClick={this.openModal}>Open modal</button>
        </CTA>
      </div>
    );
  }
}

export default () => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/aEoqEG?editors=0010">
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
