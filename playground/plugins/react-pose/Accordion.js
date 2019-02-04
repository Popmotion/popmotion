import * as React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const data = [
    {
        title: 'Short story',
        content: `height: 'auto'`
    },
    {
        title: 'Long story',
        content: `It doesn't matter how much content you put in each accordian. You only have to define one posed component that animates to "auto" and reuse that.`
    }
]

const H1 = styled.h1`
  margin-bottom: 20px;
  color: #252942;
  text-align: center;
`;

const Title = styled.h2`
  cursor: pointer;
  background-image: linear-gradient(-180deg, #ff1c68 0%, #9f0092 300px);
  padding: 5px 8px;
  border-bottom: 1px solid #9f0092;
`;

const ContentWrapper = styled.div`
  padding: 5px 8px 20px 8px;
`;

const Content = posed(styled.div`
  overflow: hidden;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.8);
`)({
  closed: {
    height: 0,
    display: 'none',
    applyAtStart: { display: 'block' },
    applyAtEnd: { display: 'none' }
  },
  open: {
    height: 'auto',
    display: 'block',
    applyAtStart: { display: 'block' },
    applyAtEnd: { display: 'block' }
  }
});

export default class Accordion extends React.Component {
    state = {
        open: false
    };

    render() {
        const { open } = this.state;

        return (
            <React.Fragment>
                <H1>{"Accordian demo"}</H1>
                {data.map(({ title, content }, i) => (
                    <React.Fragment key={i}>
                        <Title
                            onClick={() => this.setState({ open: open === i ? false : i })}
                        >
                            {open === i ? "🤯 " : "🙂 "}
                            {title}
                        </Title>
                        <Content pose={open === i ? "open" : "closed"}>
                            <ContentWrapper>{content}</ContentWrapper>
                        </Content>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    }
}
