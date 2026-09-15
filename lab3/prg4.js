import http from "http";
import { reviews } from "./data.js";

const server = http.createServer((req, res) => {
  const products = {
    id: 1,
    name: "Mobile",
    price: 4000,
    rating: 4.7,
    review: 225,
  };

  if (req.url === "/api/products") {
    // res.end(JSON.stringify(products));
    res.end(JSON.stringify(items));
  } 
  else if(req.url==='/api/reviews'){
    res.end(JSON.stringify(reviews))
  }
  
  else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000, () => console.log("prg4 is running "));
