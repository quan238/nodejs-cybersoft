const http = require("http");

const sever = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.end("VNTALKING: Xin chao Node.js");
  if (req.url === "/about") res.end("The about page");
  else if (req.url === "/contact") res.end("The contact page");
  else if (req.url === "/") res.end("The home page");
  else {
    res.writeHead(404);
    res.end("page not found");
  }
  
});

sever.listen(3000);
