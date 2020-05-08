import { springEffect } from '../spring';
import { decayEffect } from '../decay';
import { Effect } from '../types';

const effects = [springEffect, decayEffect];
const numEffects = effects.length;

export function getEffectFromConfig<T>(config: T): Effect<T> {
  for (const key in config) {
    for (let i = 0; i < numEffects; i++) {
      const effect = effects[i];
      if (effect.uniqueOptionKeys.has(key)) return effect;
    }
  }
}
