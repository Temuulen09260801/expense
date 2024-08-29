const postgres = require("postgres");
require("dotenv").config();

const sql = postgres({
  host: "ep-wandering-pond-a5mjg244.us-east-2.aws.neon.tech",
  database: "expense_db",
  username: "expense_db_owner",
  password: "cyYfLSA6mrh9",
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=ep-wandering-pond-a5mjg244`,
  },
});

module.exports = sql;
