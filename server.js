const http = require("http"); //creates node.js server
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(`request url: ${req.url}` );
  // console.log(`request method: ${req.method}` );

  //long way
  // res.statusCode = 200;
  // res.setHeader('Content-type', 'text/html')
  // res.write('Here is the information you requested')
  // res.end();

  //path routing
  let path = "./views/";

  if (req.url === "/") {
    path += "index.html";
    res.statusCode = '200';
  } else if (req.url === "/about") {
    path += "about.php";
    res.statusCode = '200';
  } else if (req.url === '/about-me') {  //redirection old path to new one (if user puts about-me it will be redirected to about with new status code)
    res.statusCode = '301';
    res.setHeader('Location', './about');
  } else {
    path += "404.php";
    res.statusCode = '404';
