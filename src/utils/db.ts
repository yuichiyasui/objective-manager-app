import { SQLiteBoolean, SQLiteBooleanValue } from "~/constants/sqlite";

export const convertBooleanValue = (bool: SQLiteBoolean) =>
  bool === SQLiteBooleanValue.true;
