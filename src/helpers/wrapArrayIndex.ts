const wrapArrayIndex = <E>(array: E[], index: number) => {
  return array[((index % array.length) + array.length) % array.length];
};

export default wrapArrayIndex;
