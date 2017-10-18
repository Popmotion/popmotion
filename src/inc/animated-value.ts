type AnimatedValue = {
  get: () => number;
  getVelocity: () => number;
};

const animatedValue = (init: number) => {
  let current = init;
  let prev = init;

  const setValue: AnimatedValue = function(v: number) {
    prev = current;
    current = init;
  };

  setValue.get = () => current;

  setValue.getVelocity = () => current;

  return setValue;
};

export default animatedValue;
