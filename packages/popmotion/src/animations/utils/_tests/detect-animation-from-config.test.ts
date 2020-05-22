import { getEffectFromConfig } from '../get-effect-from-config';
import { springEffect } from '../../spring';
import { keyframeEffect } from '../../keyframes';
import { decayEffect } from '../../decay';

describe('getEffectFromConfig', () => {
  test('it selects the correct animation effect from any given config', () => {
    expect(getEffectFromConfig({ stiffness: 300 })).toBe(springEffect);
    expect(getEffectFromConfig({ duration: 2 })).toBe(keyframeEffect);
    expect(getEffectFromConfig({ power: 2 })).toBe(decayEffect);
    expect(getEffectFromConfig({ a: 2 })).toBe(undefined);
  });
});
