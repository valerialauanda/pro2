
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations : {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: {
      connectionStrings: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      },
      migrations : {
        directory: "./src/database/migrations"
    },

  },
};
