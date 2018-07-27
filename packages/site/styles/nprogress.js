import { color } from '~/styles/vars';

export default `
/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: ${color.black};
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px ${color.black}, 0 0 5px ${color.black};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}


.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}
`;
