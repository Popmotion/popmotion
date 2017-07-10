import { Renderer } from 'popmotion';

class ElementScroll extends Renderer {
  onRender() {
    const { element } = this.props;
    const { top, left } = this.values;
    element.scrollLeft = left;
    element.scrollTop = top;
  }

  onRead(key = 'top') {
    const { element } = this.props;
    return (key === 'top') ? element.scrollTop : element.scrollLeft;
  }
}

class ViewportScroll extends Renderer {
  onRender() {
    const { top, left } = this.values;
    if (typeof window !== undefined) window.scrollTop(left, top);
  }

  onRead(key) {
    if (typeof window === undefined) return 0;
    return (key === 'top') ? window.pageYOffset : window.pageXOffset;
  }
}

export const scroll = (element) => element ? new ElementScroll({ element }) : new ViewportScroll();
