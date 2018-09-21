import createStyler from '../styler';
import { Styler } from '../styler/types';
export { Styler };

type ViewportProps = {
  scrollTop?: number;
  scrollLeft?: number;
};

export default createStyler({
  useCache: false,
  onRead: key =>
    key === 'scrollTop' ? window.pageYOffset : window.pageXOffset,
  onRender: ({ scrollTop = 0, scrollLeft = 0 }: ViewportProps) =>
    window.scrollTo(scrollLeft, scrollTop)
});
