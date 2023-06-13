import http from "http";
import dbg from "debug";
import config from "./config";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import login from "./routes/login";
import signup from "./routes/signup";
dotenv.config();

const debug = dbg("http");
const PORT = config.PORT;
const HOST_NAME = config.HOST_NAME;
const app = express();
const { json } = express;
app.use(express.json());

app.use(cors());

app.use(json({ extended: false }));

app.use("/api", login, signup);

app.use("/", (req, res) => {
  res.send("Server is Running");
});

const server = http.createServer(app);
server.listen(PORT, HOST_NAME, () => {
  debug(`✨✨ Server running at http://${HOST_NAME}:${PORT}:`);
});
