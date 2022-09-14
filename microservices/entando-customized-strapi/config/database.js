module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "172.20.0.121",
      port: 5433,
      database: "test",
      user: "postgres",
      password: "postgres",
      ssl: false,
      schema : "public"
    },
  },
});
