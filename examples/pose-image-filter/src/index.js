import React from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import './styles.css';

// Image taken by me, check that shit out at https://mattperry.photography/

const default = { filter: 'grayscale(80%) blur(2px)' };
const Img = posed.img({
  hoverable: true,
  default,
  hoverEnd: default,
  hovering: { filter: 'grayscale(0%) blur(0px)' }
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Img src="https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/5b4a5c2d88251b376ea105c1/5b4ae647575d1fa91f1f2def/1531635336765/DSCF2959.jpg?format=1500w" />,
  rootElement
);
