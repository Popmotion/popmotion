import { Renderer } from 'popmotion';

class ScrollRenderer extends Renderer {
  get(key) {
    // Break the cache as scroll can be updated by the user
    this.state[key] = undefined;
    return super.get(key);
  }
}

class ElementScroll extends ScrollRenderer {
  onRender() {
    const { element } = this.props;
    const { top, left } = this.state;
    element.scrollLeft = left;
    element.scrollTop = top;
  }

  onRead(key = 'top') {
    const { element } = this.props;
    return (key === 'top') ? element.scrollTop : element.scrollLeft;
  }
}

class ViewportScroll extends ScrollRenderer {
  onRender() {
    const { top, left } = this.state;
    if (typeof window !== undefined) window.scrollTo(left, top);
  }

  onRead(key) {
    if (typeof window === undefined) return 0;
    return (key === 'top') ? window.pageYOffset : window.pageXOffset;
  }
}

export default (element) => element ? new ElementScroll({ element }) : new ViewportScroll();
