import { SQLiteBoolean, SQLiteDate, SQLiteTimestamp } from "~/constants/sqlite";

export type ObjectType = {
  id: number;
  title: string;
  purpose: string;
  description: string;
  deadlineDate: string;
  achieved: boolean;
  createdAt: string;
  modifiedAt: string | null;
};

export type ObjectEntity = {
  id: number;
  title: string;
  purpose: string;
  description: string;
  achieved: SQLiteBoolean;
  image_url: string | null;
  deadline_date: SQLiteDate;
  created_at: SQLiteTimestamp;
  modified_at: SQLiteTimestamp | null;
};
