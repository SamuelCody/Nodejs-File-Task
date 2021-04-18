const http = require("http");
const fs = require("fs");
const axios = require("axios");
const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    //Perform get request to http://jsonplaceholder.typicode.com/posts
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data;

    //Write response to posts.json file in 'result' directory
    await fs.writeFile("./result/posts.json", JSON.stringify(data), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Response data has been written to file");
    });
  } catch (err) {
    console.log(err);
  }
});

server.listen(PORT, "127.0.0.1");

console.log(`Server started on port: ${PORT}`);
