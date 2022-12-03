require("dotenv").config();

// config.js
const env = process.env.NODE_ENV; // 'local'

const local = {
  server: {
    port: parseInt(process.env.PORT) || 3000,
  },
};

const development = {
  server: {
    port: parseInt(process.env.PORT) || 3000,
  },
};

const production = {
  server: {
    port: parseInt(process.env.PORT) || 3000,
  },
};

const config = {
  local,
  development,
  production,
};

module.exports = config[env];
