import React from 'react';
import Logo from './Logo';
import { css, svg, svgPath, tween, easing, parallel, physics } from 'popmotion';
import { WHITE } from '~/styles/vars';

const SVG_ID = 'logo-container';
const ANIMATED_LOGO = 'animated-logo';

export default class extends React.Component {
  componentDidMount() {
    const pathDom = document.getElementById(ANIMATED_LOGO);
    const pathRenderer = svgPath(pathDom);
    const pathSvgRenderer = svg(pathDom);
    const containerRenderer = css(document.getElementById(SVG_ID));

    pathRenderer.set({
      length: 0,
      spacing: 100,
      offset: 0
    });

    pathSvgRenderer.set({
      strokeOpacity: 1
    });

    this.action = tween({
      to: 15,
      duration: 800,
      ease: easing.easeIn,
      onUpdate: (v) => pathRenderer.set('length', v),
      onComplete: () => {
        this.action.stop();
        this.action = parallel([
          tween({
            onUpdate: (v) => {
              pathSvgRenderer.set({
                fillOpacity: v,
                strokeOpacity: 1 - v
              });
            }
          }),
          physics({
            to: 1,
            velocity: 50,
            spring: 300,
            friction: 0.95,
            onUpdate: (v) => containerRenderer.set('scale', v)
          })
        ]).start();
      }
    }).start();
  }

  componentWillUnmount() {
    if (this.action) this.action.stop();
  }

  render() {
    return (
      <Logo
        {...this.props}
        from={WHITE}
        to={WHITE}
        id={SVG_ID}
        fillOpacity={0}
        stroke={WHITE}
        strokeOpacity={0}
        pathId={ANIMATED_LOGO}
      />
    );
  }
}
