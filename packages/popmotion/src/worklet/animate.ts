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
  const animation = new WorkletAnimation('tween', effect, document.timeline);

  animation.play();
}
