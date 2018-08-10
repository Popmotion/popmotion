import React, { PureComponent, ReactElement } from 'react';
import posed from 'react-pose/lib';
import { invariant } from 'hey-listen';

export type PoseProps = { [key: string]: any };

export type Props = {
  children: string;
  wordPoses?: PoseProps;
  charPoses?: PoseProps;
  pose?: string | string[];
};

const splitStyles = { display: 'inline-block' };

class SplitText extends PureComponent<Props> {
  props: Props;
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

    return text.map((char, i) => {
      return this.Char ? (
        <this.Char
          style={splitStyles}
          wordIndex={wordIndex}
          numWords={numWords}
          charIndex={baseCharCount + i}
          charInWordIndex={i}
          numChars={numChars}
          {...this.props}
        >
          {char}
        </this.Char>
      ) : (
        <div style={splitStyles}>{char}</div>
      );
    });
  }

  renderWords(text: string[][]) {
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
          style={splitStyles}
          wordIndex={i}
          numWords={numWords}
          {...this.props}
        >
          {chars}
        </this.Word>
      ) : (
        <div style={splitStyles}>{chars}</div>
      );
    });
  }

  render() {
    return this.renderWords(this.text);
  }
}

export default SplitText;
