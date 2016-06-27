export default (min, max) => (v) => Math.max(Math.min(v, max), min);
