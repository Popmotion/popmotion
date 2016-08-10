export default function (...definitions) {
  const defs = [...definitions];
  const numDefs = defs.length;

  return (flow, fromState, toState) => {
    for (let i = 0; i < numDefs; i++) {
      const def = defs[i];
      const matchesFrom = (!def.from || (def.from === fromState));
      const matchesTo = (!def.to || (def.to === toState));

      if (matchesFrom && matchesTo) {
        if (typeof def.action === 'function') {
          return (def.action(flow));
        }
        return def.action;
      }
    }
  };
}
