import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <a href="/bottle">Bottle</a>
      <a href="/pot">Pot</a>
    `);

    res.end();
  } else if (req.url === "/bottle") {
    res.setHeader("Content-Type", "text/html");

    const stream = createReadStream("bottle.html", {
      encoding: "utf-8",
    });

    stream.pipe(res);
  } else if (req.url === "/pot") {
    res.setHeader("Content-Type", "text/html");

    const stream = createReadStream("pot.html", {
      encoding: "utf-8",
    });

    stream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("prg3 is running");
});
