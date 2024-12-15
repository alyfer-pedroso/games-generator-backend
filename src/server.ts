require("dotenv").config({ path: ".env" });
import router from "./router";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
server.use(express.json({ limit: "50mb" }));
server.use("/api", router);

server.listen(parseInt(process.env.PORT), process.env.LOCAL === "true" ? "0.0.0.0" : "", () => {
  if (process.env.LOCAL === "true") console.log(`Server is running in http://localhost:${process.env.PORT}`);
});
