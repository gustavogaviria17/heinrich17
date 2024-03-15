// eslint-disable-next-line
export const withoutUndefined = <T>([_, value]: T[]): boolean => value !== undefined;

export const toQuery = <T extends string | number | boolean | undefined | string[]>([key, value]: T[]):
  | string
  | undefined => {
  if (value === undefined) return value;

  if (Array.isArray(value)) {
    return value.map((dataValue): string => `${key}=${encodeURIComponent(dataValue)}`).join('&');
  }

  return `${key}=${encodeURIComponent(value)}`;
};
