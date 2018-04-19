// This file checks to see if we are in a production environment and uses the appropriate variables
if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
