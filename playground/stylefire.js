import React, { Fragment } from 'react';
import styler from 'stylefire';

const position = pos => ref => ref && styler(ref).set(pos);

const Icon = ({ id, pos }) => (
  <svg
    width="641px"
    height="422px"
    viewBox="0 0 641 422"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <defs>
      <rect id="path-1" x="121" y="84" width="130" height="127" />
      <mask
        id="mask-2"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
        x="-2"
        y="-2"
        width="134"
        height="131"
      >
        <rect x="119" y="82" width="134" height="131" fill="white" />
        <use xlinkHref="#path-1" fill="black" />
      </mask>
    </defs>
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
        <use
          id="outline"
          stroke="#FF1C68"
          mask="url(#mask-2)"
          strokeWidth="4"
          strokeDasharray="10,10"
          xlinkHref="#path-1"
        />
        <rect
          ref={position(pos)}
          id={`${id}-square`}
          fill="#FF1C68"
          x="121"
          y="84"
          width="130"
          height="130"
        />
      </g>
      <text x="20" y="20" fill="black">
        {JSON.stringify(pos)}
      </text>
    </g>
  </svg>
);

export class SVG extends React.Component {
  render() {
    return (
      <Fragment>
        <Icon pos={{ x: 100 }} />
        <Icon pos={{ y: 100 }} />
        <Icon pos={{ rotate: 45 }} />
        <Icon pos={{ scale: 0.5 }} />
        <Icon pos={{ x: 100, rotate: 45 }} />
        <Icon pos={{ x: 100, y: 100, rotate: 45, scale: 0.5 }} />
        <Icon pos={{ originX: 0, originY: 0, rotate: 45 }} />
        <Icon pos={{ originX: '0%', originY: '0%', rotate: 45 }} />
        <Icon pos={{ originX: '50%', originY: '50%', rotate: 45 }} />
        <Icon pos={{ originX: '100%', originY: '100%', rotate: 45 }} />
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
