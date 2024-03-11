const path = require('path');
require("dotenv/config")

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      port: process.env.DATABASE_PORT,
    },
    migrations: {
      directory: path.resolve(__dirname,"src", "database", "knex", "migrations")
    },
  },
};
