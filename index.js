const { API } = require("./config/constants");
const server = require("./src/server");

server.listen(API.PORT, () => {
  console.log(`Server running on port: ${API.PORT}`);
});
