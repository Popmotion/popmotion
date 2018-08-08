import React, { Fragment, ReactElement } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { invariant } from 'hey-listen';

export type PoseProps = { [key: string]: any };

export type Props = {
  children: string;
  words?: PoseProps;
  chars?: PoseProps;
  pose?: string | string[];
};

class SplitText extends React.PureComponent {
  text: string[];
  Word: (props: PoseProps) => ReactElement<any>;
  Char: (props: PoseProps) => ReactElement<any>;

  constructor(props: Props) {
    super(props);

    const { words, chars, children } = props;

    invariant(typeof children === 'string', 'children prop must be a string');

    this.text = children.split(' ');

    if (words) this.Word = posed.div(words);
    if (chars) this.Char = posed.div(chars);
  }

  render() {
    const { Word, Char } = this;

    return <Fragment>{}</Fragment>;
  }
}

export default SplitText;
