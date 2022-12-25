module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123321",
  DB: "testdb-ex",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};