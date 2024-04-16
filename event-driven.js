//  const util = require('util')
//  util.promisify(data)
var EventEmitter = require("events");
const { createServer } = require("http");

class Class {
  obj = {
    name: "daniel",
  };
}
const myClass = new Class();
var myEmitter = new EventEmitter();
myEmitter.on("", (name) => {
  console.log("Hi " + myClass.obj.name + `${name}`);
});

createServer((req, res) => {
  if (req.url === "/") res.end("Hello");
}).listen(5000, () => {
  console.log("Running Server");
});

myEmitter.emit("", "prince");
