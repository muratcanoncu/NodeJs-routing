const http = require("http");
const PORT = 5000 || process.env.PORT;
const HOST = "localhost";
const fs = require("fs");
const path = require("path");
const fullPath = path.join("http://", HOST, ":", PORT.toString(), "/profile");

const server = http.createServer((request, response) => {
  const pathName = request.url;
  const fullPath = path.join(
    "http://" + HOST + ":" + PORT.toString() + pathName
  );
  switch (pathName) {
    case "/":
      fs.readFile("Files/home.html", (err, data) => {
        console.log(fullPath);
        response.end(data);
      });
      break;
    case "/dog":
      fs.readFile("Files/dog.html", (err, data) => {
        console.log(fullPath);
        response.end(data);
      });
      break;
    case "/cat":
      fs.readFile("Files/cat.html", (err, data) => {
        console.log(fullPath);
        response.end(data);
      });
      break;
    case "/car":
      fs.readFile("Files/car.html", (err, data) => {
        console.log(fullPath);
        response.end(data);
      });
      break;
    default:
      fs.readFile("Files/404.html", (err, data) => {
        // console.log(fullPath);
        response.end(data);
      });
      break;
  }
});
server.listen(PORT, HOST, () => {
  console.log("Server running on PORT :" + PORT + " Host:" + HOST);
});
