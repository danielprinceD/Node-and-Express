const http = require("http");
const { readFile } = require("fs");

const myPromise = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const start = async () => {
  const first = await myPromise("./myfile.txt");
  console.log(first);
};

const server = http.createServer((req, res) => {
  console.log("Loaded");
  if (req.url === "/") {
    res.write("Hello Iam Daniel");
    res.end();
  }
  if (req.url === "/file") {
    res.write(start());
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server is Running");
});
