export default function track(v1, v2) {
  const v1Origin = v1.get();
  const v2Origin = v2.get();

  const updateV2 = (v) => {
    const offset = v - v1Origin;
    v2.update(v2Origin + offset);
  }

  v1.addListener(updateV2);

  return function snap() {
    v1.removeListener(updateV2);
  }
}
