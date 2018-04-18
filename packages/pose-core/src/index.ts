import {
  PoseFactoryConfigurator
} from './types';

const poseFactory: PoseFactoryConfigurator = ({

}) => (config) => {
  const { parentValues, ancestorValues } = config;
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const activeActions = new Map();
  const activePoses = new Map();
  const children = new Set();

  const api = {

  };

  return api;
};

export default poseFactory;
