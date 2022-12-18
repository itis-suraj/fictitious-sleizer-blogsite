const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "itis_suraj",
        mongodb_password: "heMSHqF7dOCr5BRk",
        mongodb_clustername: "messages",
        mongodb_database: "messages",
      },
    };
  }
  return {
    env: {
      mongodb_username: "itis_suraj",
      mongodb_password: "heMSHqF7dOCr5BRk",
      mongodb_clustername: "messages",
      mongodb_database: "messages",
    },
  };
};
