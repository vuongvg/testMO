const http = require("http");
const app = require("./app");

const config = require("./configuaration/config");

//create a server object:
http.createServer(app).listen(config.server.port, undefined, (err) => {
  if (err) {
    throw err;
  }
  console.log("\x1B[33mServer is listening to port " + config.server.port);
});
