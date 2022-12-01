type ResolvePromisesObject = (input: Record<string, Promise<unknown>>) => Promise<Record<string, unknown>>;

export const resolvePromisesObject: ResolvePromisesObject = async (input) => {
  const keys = Object.keys(input);
  const results = await Promise.all(Object.values(input));
  return keys.reduce((output, key, index) => ({
    ...output,
    [key]: results[index],
  }), {});
};
