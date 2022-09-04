import {
  openDatabase,
  Query,
  ResultSetError,
  SQLiteCallback,
  WebSQLDatabase,
} from "expo-sqlite";

export const initializeDatabase = ({ exec }: WebSQLDatabase) => {
  const queries: Query[] = [
    {
      sql: `
        CREATE TABLE IF NOT EXISTS objects (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          purpose TEXT NOT NULL,
          description TEXT NOT NULL,
          deadline_date TEXT NOT NULL,
          achieved INTEGER NOT NULL,
          created_at TEXT NOT NULL,
          modified_at TEXT
        );
      `,
      args: [],
    },
  ];
  const readOnly = false;
  const callback: SQLiteCallback = (error, resultSet) => {
    const errorMessage = "initializeDatabase is failed.";
    if (error) {
      console.error(JSON.stringify(error));
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

    console.info("create table success");
  };

  exec(queries, readOnly, callback);
};

export const db = openDatabase("objective-manager");
