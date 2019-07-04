import React, { Fragment } from 'react';
import styler, { buildStyleProperty } from 'stylefire';

const position = pos => ref => ref && styler(ref).set(pos);

const Icon = ({ id, pos, style }) => (
  <svg
    width="641px"
    height="422px"
    viewBox="0 0 641 422"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group" fillRule="nonzero">
        <rect
          id="area"
          stroke="#979797"
          x="0.5"
          y="0.5"
          width="640"
          height="421"
        />
        <rect
          id="outline"
          stroke="#FF1C68"
          mask="url(#mask-2)"
          strokeWidth="4"
          fill="white"
          strokeDasharray="10,10"
          x="120"
          y="83"
          width="102"
          height="102"
        />
        <rect
          ref={position(pos)}
          id={`${id}-square`}
          fill="#FF1C68"
          x="121"
          y="84"
          width="100"
          height="100"
          style={style}
        />
      </g>
      <text x="20" y="20" fill="black">
        {JSON.stringify(pos)}
      </text>
    </g>
  </svg>
);

const Path = ({ pos }) => (
  <svg
    width="500px"
    height="100px"
    viewBox="0 0 500 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block', border: '1px solid red' }}
  >
    <path
      id="lineAB"
      d="M0,0 Q50,100 100,100"
      stroke="red"
      stroke-width="3"
      fill="none"
      ref={element => {
        if (!element) return;
        console.log('Should be 3: ', styler(element).get('strokeWidth'));
        styler(element).set(pos);
      }}
    />
    <text x="20" y="20" fill="black">
      {JSON.stringify(pos)}
    </text>
  </svg>
);

export class SVG extends React.Component {
  render() {
    return (
      <Fragment>
        <Icon pos={{ translateX: 100 }} />
        <Icon pos={{ translateY: 100 }} />
        <Icon pos={{ rotate: 45 }} />
        <Icon pos={{ scale: 0.5 }} />
        <Icon pos={{ translateX: 100, rotate: 45, scale: 0.5 }} />
        <Icon pos={{ rotate: 45, originX: 0, originY: 0 }} />
        <Path pos={{ pathLength: 0.5, pathOffset: 0.5 }} />
        <Path pos={{ pathLength: 0.2 }} />
        <Path pos={{ pathLength: 0.2, pathOffset: 0.6 }} />
        <Path pos={{ pathLength: 0.2, pathSpacing: 0.2 }} />
        <Path pos={{ pathLength: 0.2, pathSpacing: 0.2, pathOffset: 0.5 }} />
      </Fragment>
    );
  }
}

export class CSS extends React.Component {
  setStyles = ref =>
    ref &&
    styler(ref).set({
      x: 100,
      width: 100,
      height: 100,
      rotate: 45,
      backgroundColor: 'red'
    });

  render() {
    return <div ref={this.setStyles} />;
  }
}
