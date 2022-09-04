export const SQLiteBooleanValue = {
  false: 0,
  true: 1,
} as const;
export type SQLiteBoolean =
  typeof SQLiteBooleanValue[keyof typeof SQLiteBooleanValue];

export type SQLiteDate = string;
export type SQLiteTimestamp = string;
