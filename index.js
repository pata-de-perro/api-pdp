const server = require("./src/server");
const { API } = require("./config/constants");
const { connectDB } = require("./src/lib/db");

const startAPI = async () => {
  try {
    await connectDB();
    server.listen(API.PORT, () => {
      console.log(`Server running on port: ${API.PORT}`);
    });
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

startAPI();
