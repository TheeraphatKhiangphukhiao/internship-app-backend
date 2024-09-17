import mysql from "mysql";
import util from "util";


const conn = mysql.createPool({
    connectionLimit: 10,
    host: "202.28.34.197",
    user: "web65_64011212185",
    password: "64011212185@csmsu",
    database: "web65_64011212185",
});

export const queryAsync = util.promisify(conn.query).bind(conn);
