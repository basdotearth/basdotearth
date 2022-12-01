export const classes = (input: string | string[] | Record<string, boolean>): string => {
  if (Array.isArray(input)) {
    return input.join(' ');
  }

  if (typeof input === 'object') {
    return Object.entries(input)
      .filter(([_key, value]) => !!value)
      .map(([key]) => key)
      .join(' ');
  }

  return input;
};
