import { Dispatch, SetStateAction } from "react";
import { Query, ResultSet, ResultSetError, SQLiteCallback } from "expo-sqlite";
import dayjs from "dayjs";

import { db } from "~/database";
import { SQLiteBooleanType, SQLiteBooleanValue } from "~/constants/sqlite";

type InsertObjectParameter = {
  title: string;
  purpose: string;
  description: string;
  deadlineDate: string;
};

const insert = ({
  title,
  purpose,
  description,
  deadlineDate,
}: InsertObjectParameter) => {
  const sql = `
    INSERT INTO objects (
      title,
      purpose,
      description,
      deadline_date,
      achireved,
      created_at
    ) values (?, ?, ?, ?, ?, ?);
  `;
  const args: [
    InsertObjectParameter["title"],
    InsertObjectParameter["purpose"],
    InsertObjectParameter["description"],
    InsertObjectParameter["deadlineDate"],
    SQLiteBooleanType,
    string
  ] = [
    title,
    purpose,
    description,
    deadlineDate,
    SQLiteBooleanValue.false,
    dayjs().toString(),
  ];
  const queries: Query[] = [{ sql, args }];
  const readOnly = false;
  const callback: SQLiteCallback = (error, resultSet) => {
    const errorMessage = "insert object is failed.";
    if (error) {
      console.error(`[${error.name}]: ${error.message}`);
      throw new Error(errorMessage);
    }
    if (!resultSet) {
      console.error("resultSet is undefined.");
      throw new Error(errorMessage);
    }
    const errorResults = resultSet.filter(
      (result): result is ResultSetError => "error" in result
    );
    if (errorResults.length > 0) {
      errorResults.forEach((errorResult) => {
        console.error(
          `[${errorResult.error.name}]: ${errorResult.error.message}`
        );
      });
      throw new Error(errorMessage);
    }

    console.info("insert object successed.");
  };

  db.exec(queries, readOnly, callback);
};

export type ObjectType = {
  id: number;
  title: string;
  purpose: string;
  description: string;
  achireved: boolean;
  deadline_date: string;
  created_at: string;
  modified_at: string | null;
};

const selectAll = (
  setObjects: Dispatch<SetStateAction<ObjectType[]>>
): void => {
  const sql = `
    SELECT 
      id,
      title,
      purpose,
      description, 
      achireved, 
      deadline_date,
      created_at, 
      modified_at
    FROM objects;
  `;
  const queries: Query[] = [{ sql, args: [] }];
  const readOnly = true;

  const callback: SQLiteCallback = (error, resultSet) => {
    const errorMessage = "selectAll objects is failed.";
    if (error) {
      console.error(`[${error.name}]: ${error.message}`);
      throw new Error(errorMessage);
    }
    if (!resultSet) {
      console.error("resultSet is undefined.");
      throw new Error(errorMessage);
    }
    const errorResults = resultSet.filter(
      (result): result is ResultSetError => "error" in result
    );
    if (errorResults.length > 0) {
      errorResults.forEach((errorResult) => {
        console.error(
          `[${errorResult.error.name}]: ${errorResult.error.message}`
        );
      });
      throw new Error(errorMessage);
    }
    const rows = resultSet
      .filter((result): result is ResultSet => !("error" in result))
      .flatMap((result) => result.rows);
    console.info("selectAll objects is success.");
    setObjects(rows as ObjectType[]);
  };

  db.exec(queries, readOnly, callback);
};

export const objectRepository = {
  insert,
  selectAll,
};
