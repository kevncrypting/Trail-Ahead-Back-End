// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config();

module.exports = {
    development: {
        client: "postgresql",
        connection: "postgresql://localhost/trail-database",
        debug: true,
    },

    test: {
        client: "postgresql",
        connection: "postgres://localhost/trail-database",
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
        debug: true,
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './migrations',
        },
    },
};
