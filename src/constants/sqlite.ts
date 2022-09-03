export const SQLiteBooleanValue = {
  false: 0,
  true: 1,
} as const;
export type SQLiteBooleanType =
  typeof SQLiteBooleanValue[keyof typeof SQLiteBooleanValue];
