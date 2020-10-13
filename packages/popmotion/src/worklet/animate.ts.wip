import { registerCustomProperties, namespace } from './custom-properties';
import { whenWorkletReady } from './load-worklet';

type Target = {
  [key: string]: string | number;
};

interface AnimationOptions {}

registerCustomProperties();

export async function animate(
  element: HTMLElement | SVGElement,
  values: Target,
  options: AnimationOptions
) {
  await whenWorkletReady();

  // TODO: Dynamically map transforms and filters to CSS variable name and type
  const keyframes = [
    {
      [namespace('translate-x')]:
        element.style.getPropertyValue(namespace('translate-x')) || '0px' // TODO: Read from element and fallback to defailt of not set
    },
    {
      [namespace('translate-x')]: `${values.x}px` // TODO dynamically convert numbers to default type
    }
  ];

  // TODO: Dynamically generate this based on the values set on this element potentially within a weakmap
  element.style.transform = `translateX(var(${namespace('translate-x')}))`;

  const effect = new KeyframeEffect(element, keyframes, options);
  // TODO Replace ts ignore
  // @ts-ignore
  const animation = new WorkletAnimation('tween', effect, document.timeline, {
    documentTimeline: new DocumentTimeline()
  });

  return animation.play();
}

export async function parallax(
  element: HTMLElement | SVGElement,
  values: Target,
  source: HTMLElement,
  options: AnimationOptions
) {
  await whenWorkletReady();
  const keyframes: any = [];
  const effect = new KeyframeEffect(element, keyframes, options);
  // @ts-ignore
  const timeline = new ScrollTimeline({
    scrollSource: source,
    timeRange: 1000,
    orientation: 'vertical'
  });
  // @ts-ignore
  const animation = new WorkletAnimation('parallax', effect, timeline);

  return animation.play();
}
