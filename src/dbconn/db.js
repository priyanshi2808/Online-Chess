import config from "../config";
import mysql from "mysql2";
import dbg from "debug";
const debug = dbg("database");
const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DATABASE,
});

debug("mysql pool created");
pool.on("connection", function (connection) {
  debug("database pool connected");
});
pool.on("enqueue", function () {
  debug("Waiting for available connection slot");
});
pool.on("release", function (connection) {
  debug("Connection %d released", connection.threadId);
});
pool.on("acquire", function (connection) {
  debug("Connection %d acquired", connection.threadId);
});

export default pool;
