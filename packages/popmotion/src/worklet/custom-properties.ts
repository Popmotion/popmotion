interface CustomProperty {
  name: string;
  syntax: string;
  initial: string | number;
}

const transforms: CustomProperty[] = [
  {
    name: 'translate',
    syntax: 'length-percentage',
    initial: '0px'
  },
  {
    name: 'scale',
    syntax: 'number',
    initial: 1
  },
  {
    name: 'rotate',
    syntax: 'angle',
    initial: '0deg'
  }
];

const axes = ['x', 'y', 'z'];
const customProperties: CustomProperty[] = [];

transforms.forEach(({ name, syntax, initial }) => {
  customProperties.push({ name, syntax, initial });

  axes.forEach(axis =>
    customProperties.push({
      name: `${name}-${axis}`,
      syntax,
      initial
    })
  );
});

export function namespace(name: string) {
  return `--pm-${name}`;
}

export function registerCustomProperties() {
  // TODO we need to check for registerProperty's presence
  customProperties.forEach(({ name, syntax, initial }) => {
    // TODO declare this with types
    (CSS as any).registerProperty({
      name: namespace(name),
      syntax: `<${syntax}>`,
      inherits: false,
      initialValue: initial
    });
  });
}
