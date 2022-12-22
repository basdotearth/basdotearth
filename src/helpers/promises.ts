type UnresolvedObject = Record<PropertyKey, Promise<any>>;
type ResolvedObject<Type extends UnresolvedObject> = { [Key in keyof Type]: Awaited<Type[Key]> };

export const resolvePromisesObject = async <Type extends UnresolvedObject>(
  input: Type
): Promise<ResolvedObject<Type>> => {
  const keys = Object.keys(input);
  const results = await Promise.all(Object.values(input));
  return keys.reduce((output, key, index) => ({
    ...output,
    [key]: results[index],
  }), {} as ResolvedObject<Type>);
};
