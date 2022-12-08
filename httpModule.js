const http = require("http");
const server = http.createServer((res, req) => {
  console.log(res);
  if (res.url === "/") {
    req.end("Welcome to root page");
  }
  if (res.url === "/about") {
    req.end("Welcome to our About Us Page");
  }
  req.end("<h1>Not Found</h1>");
  //   req.write("Welcome to our lab page");
  //   req.end();
});
server.listen(5001);
