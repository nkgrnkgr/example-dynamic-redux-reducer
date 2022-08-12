type Assert = (value: unknown) => asserts value;

export const assert: Assert = (value) => {
  if (!value) {
    throw new Error("invalid value");
  }
};
