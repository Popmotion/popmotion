import React, { PureComponent, ReactElement } from 'react';
import posed from 'react-pose/lib';
import { invariant } from 'hey-listen';

export type PoseProps = { [key: string]: any };

export type Props = {
  children?: string;
  wordPoses?: PoseProps;
  charPoses?: PoseProps;
  pose?: string | string[];
  initialPose?: string | string[];
};

const splitStyles = { display: 'inline-block' };

class SplitText extends PureComponent<Props> {
  props: Props;
  poseProps: Props;
  text: string[][];
  Word: (props: PoseProps) => ReactElement<any>;
  Char: (props: PoseProps) => ReactElement<any>;

  constructor(props: Props) {
    super(props);

    const { wordPoses, charPoses, children } = props;

    this.parseText(children);

    if (wordPoses) this.Word = posed.div(wordPoses);
    if (charPoses) this.Char = posed.div(charPoses);
  }

  parseText(text: string) {
    invariant(typeof text === 'string', 'Child of SplitText must be a string');

    const { children, wordPoses, charPoses, ...poseProps } = this.props;
    this.poseProps = poseProps;

    this.text = text.split(' ').map(word => word.split(''));
  }

  componentWillReceiveProps({ children }: Props) {
    if (this.props.children !== children) this.parseText(children);
  }

  renderChars(
    text: string[],
    wordIndex: number,
    numWords: number,
    baseCharCount: number
  ) {
    const numChars = text.length;
    const { children } = this.props;

    return text.map((char, i) => {
      return this.Char ? (
        <this.Char
          key={children + i}
          style={splitStyles}
          wordIndex={wordIndex}
          numWords={numWords}
          charIndex={baseCharCount + i}
          charInWordIndex={i}
          numChars={numChars}
          {...this.poseProps}
        >
          {char}
        </this.Char>
      ) : (
        char
      );
    });
  }

  renderWords(text: string[][]) {
    const { children } = this.props;
    const numWords = text.length;
    let charCount = 0;

    return text.map((word, i) => {
      const chars = [
        ...this.renderChars(word, i, numWords, charCount),
        i !== numWords - 1 ? '\u00A0' : null
      ];

      charCount += word.length;

      return this.Word ? (
        <this.Word
          key={children + i}
          style={splitStyles}
          wordIndex={i}
          numWords={numWords}
          {...this.poseProps}
        >
          {chars}
        </this.Word>
      ) : (
        <div style={splitStyles} key={children + i}>
          {chars}
        </div>
      );
    });
  }

  render() {
    return this.renderWords(this.text);
  }
}

export default SplitText;
