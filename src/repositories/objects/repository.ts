import { Dispatch, SetStateAction } from "react";
import { Query, ResultSet, ResultSetError, SQLiteCallback } from "expo-sqlite";
import dayjs from "dayjs";

import { db } from "~/database";
import {
  SQLiteBoolean,
  SQLiteBooleanValue,
  SQLiteTimestamp,
} from "~/constants/sqlite";
import { ObjectEntity, ObjectType } from "./type";
import { mapObjects } from "./mapper";
import { logger } from "~/utils/logger";

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
      achieved,
      created_at
    ) values (?, ?, ?, ?, ?, ?);
  `;
  const args: [
    InsertObjectParameter["title"],
    InsertObjectParameter["purpose"],
    InsertObjectParameter["description"],
    InsertObjectParameter["deadlineDate"],
    SQLiteBoolean,
    SQLiteTimestamp
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
      logger.error(`[${error.name}]: ${error.message}`);
      throw new Error(errorMessage);
    }
    if (!resultSet) {
      logger.error("resultSet is undefined.");
      throw new Error(errorMessage);
    }
    const errorResults = resultSet.filter(
      (result): result is ResultSetError => "error" in result
    );
    if (errorResults.length > 0) {
      errorResults.forEach((errorResult) => {
        logger.error(
          `[${errorResult.error.name}]: ${errorResult.error.message}`
        );
      });
      throw new Error(errorMessage);
    }

    logger.info("insert object successed.");
  };

  db.exec(queries, readOnly, callback);
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
      achieved, 
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
      logger.error(`[${error.name}]: ${error.message}`);
      throw new Error(errorMessage);
    }
    if (!resultSet) {
      logger.error("resultSet is undefined.");
      throw new Error(errorMessage);
    }
    const errorResults = resultSet.filter(
      (result): result is ResultSetError => "error" in result
    );
    if (errorResults.length > 0) {
      errorResults.forEach((errorResult) => {
        logger.error(
          `[${errorResult.error.name}]: ${errorResult.error.message}`
        );
      });
      throw new Error(errorMessage);
    }
    const rows = resultSet
      .filter((result): result is ResultSet => !("error" in result))
      .flatMap((result) => result.rows);
    logger.info("selectAll objects is success.");

    const objects = mapObjects(rows as ObjectEntity[]);
    setObjects(objects);
  };

  db.exec(queries, readOnly, callback);
};

export const objectRepository = {
  insert,
  selectAll,
};
