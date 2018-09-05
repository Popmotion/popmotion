import React, { PureComponent, ReactElement } from 'react';
import posed from 'react-pose';
import { invariant } from 'hey-listen';

export type PoseProps = { [key: string]: any };

export type Props = {
  children?: string;
  wordPoses?: PoseProps;
  charPoses?: PoseProps;
  pose?: string | string[];
  initialPose?: string | string[];
};

type State = {
  text?: string;
  splitText?: string[][];
  numChars?: number;
};

const splitStyles = { display: 'inline-block' };

// Memoize?
const parseText = (text: string) => {
  invariant(typeof text === 'string', 'Child of SplitText must be a string');

  return {
    text,
    numChars: text.length,
    splitText: text.split(' ').map(word => word.split(''))
  };
};

// Memoize?
const getPoseProps = (props: Props) => {
  const { wordPoses, charPoses, children, ...poseProps } = props;
  return poseProps;
};

class SplitText extends PureComponent<Props, State> {
  static getDerivedStateFromProps({ children }: Props, state: State) {
    return !state || children !== state.text ? parseText(children) : null;
  }

  props: Props;
  Word: (props: PoseProps) => ReactElement<any>;
  Char: (props: PoseProps) => ReactElement<any>;

  constructor(props: Props) {
    super(props);

    this.state = {};

    const { wordPoses, charPoses, children } = props;

    parseText(children);

    if (wordPoses) this.Word = posed.div(wordPoses);
    if (charPoses) this.Char = posed.div(charPoses);
  }

  renderChars(
    word: string[],
    wordIndex: number,
    numWords: number,
    baseCharCount: number
  ) {
    const { numChars } = this.state;
    const numCharsInWord = word.length;
    const { text } = this.state;

    return word.map((char, i) => {
      return this.Char ? (
        <this.Char
          key={text + i}
          style={splitStyles}
          wordIndex={wordIndex}
          numWords={numWords}
          charIndex={baseCharCount + i}
          charInWordIndex={i}
          numChars={numChars}
          numCharsInWord={numCharsInWord}
          {...getPoseProps(this.props)}
        >
          {char}
        </this.Char>
      ) : (
        char
      );
    });
  }

  renderWords() {
    const { text, splitText } = this.state;
    const numWords = splitText.length;
    let charCount = 0;

    return splitText.map((word, i) => {
      const chars = [
        ...this.renderChars(word, i, numWords, charCount),
        i !== numWords - 1 ? '\u00A0' : null
      ];

      charCount += word.length;

      return this.Word ? (
        <this.Word
          key={text + i}
          style={splitStyles}
          wordIndex={i}
          numWords={numWords}
          {...getPoseProps(this.props)}
        >
          {chars}
        </this.Word>
      ) : (
        <div style={splitStyles} key={text + i}>
          {chars}
        </div>
      );
    });
  }

  render() {
    return this.renderWords();
  }
}

export default SplitText;
