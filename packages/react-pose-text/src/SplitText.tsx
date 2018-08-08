import React, { PureComponent, Fragment, ReactElement } from 'react';
import posed from 'react-pose/lib';
import { invariant } from 'hey-listen';

export type PoseProps = { [key: string]: any };

export type Props = {
  children: string;
  words?: PoseProps;
  chars?: PoseProps;
  pose?: string | string[];
};

const wordStyles = { display: 'inline-block' };

class SplitText extends PureComponent<Props> {
  props: Props;
  text: string[];
  Word: (props: PoseProps) => ReactElement<any>;
  Char: (props: PoseProps) => ReactElement<any>;

  constructor(props: Props) {
    super(props);

    const { words, chars, children } = props;

    this.parseText(children);

    if (words) this.Word = posed.div(words);
    if (chars) this.Char = posed.div(chars);
  }

  parseText(text: string) {
    const { children } = this.props;

    invariant(typeof children === 'string', 'children prop must be a string');

    this.text = children.split(' ');
  }

  componentWillReceiveProps({ children }: Props) {
    if (this.props.children !== children) {
      this.parseText(children);
    }
  }

  renderChars(text, index) {}

  renderWords(text: string[]) {
    const Word = this.Word || 'div';

    return text.map((word, wordIndex) => (
      <Word style={wordStyles}>
        {this.renderChars(word, wordIndex) + `\u00A0`}
      </Word>
    ));
  }

  render() {
    return <Fragment>{this.renderWords(this.text)}</Fragment>;
  }
}

export default SplitText;
