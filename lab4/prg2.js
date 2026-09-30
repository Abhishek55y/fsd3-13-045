import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "htmlPages", "index.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "htmlPages", "about.html"));
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3333, () => {
  console.log("prg2 is running ");
});

app.listen(3333, () => console.log("prg2 is running at 3333"));
