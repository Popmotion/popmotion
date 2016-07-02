import contains from './utils/contains';
import rgba from './rgba';

export default {
  ...rgba,

  test: contains('#'),

  parse: (v) => {
    let r, g, b;

    // If we have 6 characters, ie #FF0000
    if (v.length > 4) {
      r = v.substr(1, 2);
      g = v.substr(3, 2);
      b = v.substr(5, 2);

    // Or we have 3 characters, ie #F00
    } else {
      r = v.substr(1, 1);
      g = v.substr(2, 1);
      b = v.substr(3, 1);
      r += r;
      g += g;
      b += b;
    }

    return {
      Red: parseInt(r, 16),
      Green: parseInt(g, 16),
      Blue: parseInt(b, 16),
      Alpha: 1
    };
  }
};